from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.core.validators import validate_email
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import FormContato

# Create your views here.

def login(request) :
    if(request.method != 'POST'):
        return render(request, 'accounts/login.html')

    usuario = request.POST.get('usuario')
    senha = request.POST.get('senha')

    user = auth.authenticate(request, username=usuario, password=senha)

    if not user:
        v_msg = 'Usuario ou senha invalidos'
        messages.error(request, v_msg)
        return render(request, 'accounts/login.html')
    else:
        auth.login(request, user)
        v_msg = 'Login efetuado com sucesso'
        messages.success(request, v_msg)
        return redirect('dashboard')

def logout(request) :
    auth.logout(request)
    return redirect('login')

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

    print(nome,sobrenome,email,usuario,senha,senha2)

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


    if(len(usuario) <5):
        v_msg= 'usuario precisar ter no minimo 6 caracteres'
        messages.error(request,v_msg)
        return render(request, 'accounts/cadastro.html')

    if(len(senha) <5):
        v_msg= 'Senha precisar ter no minimo 6 caracteres'
        messages.error(request,v_msg)
        return render(request, 'accounts/cadastro.html')

    if( senha != senha2 ):
        v_msg= 'Senhas nao conferem'
        messages.error(request,v_msg)
        return render(request, 'accounts/cadastro.html')

    if User.objects.filter( username=usuario).exists() :
        v_msg = 'Usuario ja existe'
        messages.error(request, v_msg)
        return render(request, 'accounts/cadastro.html')

    if User.objects.filter( email=email).exists() :
        v_msg = 'Email ja existe'
        messages.error(request, v_msg)
        return render(request, 'accounts/cadastro.html')




    user = User.objects.create_user(
        first_name=nome,
        last_name=sobrenome,
        username=usuario,
        email=email,
        password=senha,
    )
    user.save()
    v_msg = 'Registrado com Sucesso! faça o login'
    messages.success(request, v_msg)

    return redirect('login')

@login_required(redirect_field_name='login')
def dashboard(request) :

    form = FormContato()
    v_params = {
        'form' : form,
    }
    return render(request, 'accounts/dashboard.html', v_params)
