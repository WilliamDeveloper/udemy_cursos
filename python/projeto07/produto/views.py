from django.shortcuts import render
from django.views.generic.list import ListView
from django.views import View
from django.http import HttpResponse

# Create your views here.
class ProdutosLista(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Pagar')

class ProdutoDetalhe(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Pagar')

class CarrinhoAdicionar(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Pagar')

class CarrinhoRemover(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Pagar')

class Carrinho(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Pagar')

class CarrinhoFinalizar(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Pagar')