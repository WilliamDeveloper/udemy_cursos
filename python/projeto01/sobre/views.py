from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request,'sobre/index.html')


def teste(request):
    return render(request,'sobre/teste.html')