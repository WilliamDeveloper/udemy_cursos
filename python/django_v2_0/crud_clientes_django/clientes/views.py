from django.shortcuts import render
from .models import Cliente
from .forms import ClienteForm


# Create your views here.
def lista_De_clientes(request):
    clientes = Cliente.objects.all()
    v_template="clientes/lista_de_clientes.html"
    v_context_parms = {"clientes":clientes}
    return render(request,v_template, v_context_parms)


def adicionar_cliente(request):
    form = ClienteForm(request.POST)

    if form.is_valid() :
        obj = form.save
        obj.save()
    else:
        form = ClienteForm()

    v_template="clientes/adicionar_cliente.html"
    v_context_parms = {"form":form}
    return render(request,v_template, v_context_parms)