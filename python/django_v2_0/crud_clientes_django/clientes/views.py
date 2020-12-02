from django.shortcuts import render
from .models import Cliente


# Create your views here.
def lista_De_clientes(request):
    clientes = Cliente.objects.all()
    v_template="clientes/lista_de_clientes.html"
    v_context_parms = {"clientes":clientes}
    return render(request,v_template, v_context_parms)
