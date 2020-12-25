from django.shortcuts import render
from django.views.generic import ListView
from django.views import View
from django.http import HttpResponse

from . import models
from . import forms

# Create your views here.
class BasePerfil(View):
    template_name = 'perfil/criar.html'

    def setup(self, *args, **kwargs):
        super().setup(*args, **kwargs)

        self.perfil = None

        if(self.request.user.is_authenticated):

            self.perfil = models.Perfil.objects.filter(usuario=self.request.user).first()

            self.contexto = {
                'userForm': forms.UserForm(
                    data=self.request.POST or None,
                    usuario=self.request.user,
                    instance=self.request.user,
                ),
                'perfilForm': forms.PerfilForm(
                    data=self.request.POST or None,
                )
            }

        else:
            self.contexto={
                'userForm': forms.UserForm(
                    data=self.request.POST or None,
                ),
                'perfilForm': forms.PerfilForm(
                    data=self.request.POST or None,
                )
            }


        self.userForm = self.contexto['userForm']
        self.perfilForm = self.contexto['perfilForm']

        self.renderizar = render(self.request, self.template_name, self.contexto)


    def get(self, *args, **kwargs):
        return self.renderizar


class Criar(BasePerfil):
    def post(self,*args,**kwargs):
        if not self.userForm.is_valid() or not self.perfilForm.is_valid():
            return self.renderizar

        username = self.userForm.cleaned_data.get('usermame')
        password = self.userForm.cleaned_data.get('password')
        email = self.userForm.cleaned_data.get('email')
        first_name = self.userForm.cleaned_data.get('first_name')
        last_name = self.userForm.cleaned_data.get('last_name')


        if self.request.user.is_authenticated:
            usuario = self.request.user
            usuario.username = username

            if password:
                usuario.set_password(password)

            usuario.email = email
            usuario.first_name = first_name
            usuario.last_name = last_name
            usuario.save()


        else:
            usuario = self.userForm.save(commit=False)
            usuario.set_password(password)
            usuario.save()

            perfil = self.perfilForm.save(commit=False)
            perfil.usuario = usuario
            perfil.save()



        return self.renderizar

class Atualizar(BasePerfil):
    def get(self,*args,**kwargs):
        return HttpResponse('Atualizar')

class Login(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Login')

class Logout(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Logout')