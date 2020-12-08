from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.conf import settings

from .forms import RegisterForm

# Create your views here.
def register(request):
    template_name='accounts/register.html'

    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(settings.LOGIN_URL)
    else:
        form =  RegisterForm()

    params_contexto = {
        'form': form
    }

    return render(request,template_name,params_contexto)
