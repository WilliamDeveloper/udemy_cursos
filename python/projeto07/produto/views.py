from django.shortcuts import render
from django.views.generic.list import ListView
from django.views import View
from django.http import HttpResponse
from . import models

# Create your views here.
class ProdutosLista(ListView):
    model = models.Produto
    template_name = 'produto/lista.html'
    context_object_name = 'produtos'
    paginate_by = 3
    # def get(self,*args,**kwargs):
    #     return HttpResponse('ProdutosLista')

class ProdutoDetalhe(View):
    def get(self,*args,**kwargs):
        return HttpResponse('ProdutoDetalhe')

class CarrinhoAdicionar(View):
    def get(self,*args,**kwargs):
        return HttpResponse('CarrinhoAdicionar')

class CarrinhoRemover(View):
    def get(self,*args,**kwargs):
        return HttpResponse('CarrinhoRemover')

class Carrinho(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Carrinho')

class CarrinhoFinalizar(View):
    def get(self,*args,**kwargs):
        return HttpResponse('CarrinhoFinalizar')