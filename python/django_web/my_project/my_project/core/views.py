from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    v_params_context = {
        'usuario': 'William'
    }
    return render(request,'home.html',v_params_context)