from django.shortcuts import render
from django.contrib import messages

# Create your views here.

def login(request) :
    return render(request, 'accounts/login.html')

def logout(request) :
    return render(request, 'accounts/logout.html')

def cadastro(request) :
    v_msg= 'olá mundo'
    messages.success(request,v_msg)
    return render(request, 'accounts/cadastro.html')

def dashboard(request) :
    return render(request, 'accounts/dashboard.html')
