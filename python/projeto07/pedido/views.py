from django.shortcuts import render, redirect
from django.views.generic import ListView
from django.views import View
from django.http import HttpResponse

from django.contrib import messages

# Create your views here.
class Pagar(View) :
    template_name = 'pedido/pagar.html'

    def get(self,*args,**kwargs):

        if not self.request.user.is_authenticated:
            messages.error(
                self.request,
                'voce precisa fazer login'
            )
            return redirect('perfil:criar')

        if not self.request.session.get('carrinho'):
            messages.error(
                self.request,
                'carrinho vazio'
            )
            return redirect('produto:lista')

        contexto={

        }
        return render(self.request, self.template_name, contexto)


class SalvarPedido(View) :
    def get(self,*args,**kwargs):
        return HttpResponse('FecharPedido')

class Detalhe(View) :
    def get(self,*args,**kwargs):
        return HttpResponse('Detalhe')