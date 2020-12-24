from django.shortcuts import render
from django.views.generic.list import ListView
from django.views import View

# Create your views here.
class ProdutosLista(ListView):
    pass

class ProdutoDetalhe(View):
    pass

class CarrinhoAdicionar(View):
    pass

class CarrinhoRemover(View):
    pass

class Carrinho(View):
    pass

class CarrinhoFinalizar(View):
    pass