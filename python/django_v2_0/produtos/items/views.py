from django.shortcuts import render
from django.http import HttpResponse
from .models import Produto
from .forms import ProdutoForm

# Create your views here.
def home(request):
    mensagem = 'oi'
    produtos = Produto.objects.all() # select * from produtos
    return render(request,"items/index.html",{"mensagem": mensagem, "produtos": produtos})


def produtos(request):
    return HttpResponse('<h1>àrea de produtos</h1>')



def clientes(request):
    return HttpResponse('<h1>àrea de clientes</h1>')


def create_produto(request):
    form = ProdutoForm()
    return render(request,"items/create_produto.html",{"form": form})