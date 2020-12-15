from django.shortcuts import render

from .models import Contato

# Create your views here.
def index(request):
    contatos = Contato.objects.all()
    v_parametros = {
        'contatos':contatos,
    }
    return render(request,'contatos/index.html', v_parametros)
