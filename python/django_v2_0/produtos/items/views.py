from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    mensagem = 'oi'
    return render(request,"items/index.html",{mensagem})


def produtos(requests):
    return HttpResponse('<h1>àrea de produtos</h1>')



def clientes(requests):
    return HttpResponse('<h1>àrea de clientes</h1>')