from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView
from django.views import View
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
import copy
from . import models
from . import forms



# Create your views here.
class BasePerfil(View):
    template_name = 'perfil/criar.html'

    def setup(self, *args, **kwargs):
        super().setup(*args, **kwargs)

        self.carrinho = copy.deepcopy(self.request.session.get('carrinho', {}))

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
                    instance=self.perfil
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
            usuario = get_object_or_404(User,username=self.request.user.username)
            # usuario.username = username

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


        if password:
            autentica = authenticate(
                self.request,
                username=usuario,
                password=password,
            )

            if autentica:
                login(self.request,user=usuario)


        self.request.session['carrinho'] = self.carrinho
        self.request.session.save()
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