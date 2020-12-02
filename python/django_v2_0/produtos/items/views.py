from django.shortcuts import render
from django.http import HttpResponse
from .models import Produto

# Create your views here.
def home(request):
    mensagem = 'oi'
    produtos = Produto.objects.all() # select * from produtos
    return render(request,"items/index.html",{"mensagem": mensagem})


def produtos(requests):
    return HttpResponse('<h1>àrea de produtos</h1>')



def clientes(requests):
    return HttpResponse('<h1>àrea de clientes</h1>')