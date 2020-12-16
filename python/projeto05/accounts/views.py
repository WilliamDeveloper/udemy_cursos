from django.shortcuts import render
from django.contrib import messages
from django.core.validators import validate_email

# Create your views here.

def login(request) :
    return render(request, 'accounts/login.html')

def logout(request) :
    return render(request, 'accounts/logout.html')

def cadastro(request) :
    print('request: ', request)
    print('request.post: ',request.POST)
    print('request.get: ',request.GET)

    if(request.method != 'POST'):
        return render(request, 'accounts/cadastro.html')

    nome = request.POST.get('nome')
    sobrenome = request.POST.get('sobrenome')
    email = request.POST.get('email')
    usuario = request.POST.get('usuario')
    senha = request.POST.get('senha')
    senha2 = request.POST.get('senha2')

    if not nome \
        or not sobrenome \
        or not email \
        or not usuario \
        or not senha \
        or not senha2:

        v_msg= 'Nunhum campo pode estar vazio'
        messages.error(request,v_msg)
        return render(request, 'accounts/cadastro.html')

    try:
        validate_email(email)
    except:
        v_msg = 'Email invalido'
        messages.error(request, v_msg)
        return render(request, 'accounts/cadastro.html')


    if(len(usuario) <6):
        v_msg= 'usuario precisar ter no minimo 6 caracteres'
        messages.error(request,v_msg)
        return render(request, 'accounts/cadastro.html')

    if(len(senha) <6):
        v_msg= 'Senha precisar ter no minimo 6 caracteres'
        messages.error(request,v_msg)
        return render(request, 'accounts/cadastro.html')

    if( senha != senha2 ):
        v_msg= 'Senhas nao conferem'
        messages.error(request,v_msg)
        return render(request, 'accounts/cadastro.html')




    return render(request, 'accounts/cadastro.html')

def dashboard(request) :
    return render(request, 'accounts/dashboard.html')
