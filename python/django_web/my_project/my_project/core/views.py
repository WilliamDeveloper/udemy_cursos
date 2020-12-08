from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

import mimetypes
mimetypes.add_type("text/css", ".css", True)

def home(request):
    v_params_context = {
        'usuario': 'William'
    }
    return render(request,'home.html',v_params_context)

def contact(request):
    v_params_context = {
        'usuario': 'William'
    }
    return render(request,'contact.html',v_params_context)