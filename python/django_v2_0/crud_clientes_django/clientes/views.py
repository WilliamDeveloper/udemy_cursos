from django.shortcuts import render, redirect,get_object_or_404
from .models import Cliente
from .forms import ClienteForm
from django.contrib import messages


# Create your views here.
def lista_de_clientes(request):
    clientes = Cliente.objects.all().order_by('-id')
    v_template="clientes/lista_de_clientes.html"
    v_context_parms = {"clientes":clientes}
    return render(request,v_template, v_context_parms)


def adicionar_cliente(request):
    form = ClienteForm(request.POST)

    if form.is_valid() :
        obj = form.save()
        obj.save()
        form = ClienteForm()
        messages.success(request, 'Cliente adicionado com sucesso')
        v_to = 'lista_de_clientes'
        return redirect(v_to)


    v_template="clientes/adicionar_cliente.html"
    v_context_parms = {"form":form}
    return render(request,v_template, v_context_parms)


def editar_cliente(request, id=None):
    cliente = get_object_or_404(Cliente, id=id)

    form = ClienteForm(request.POST or None, instance=cliente)
    if form.is_valid():
        obj = form.save()
        obj.save()
        form = ClienteForm()
        v_to = 'lista_de_clientes'
        messages.info(request, 'Cliente editado com sucesso')
        return redirect(v_to)

    v_template = "clientes/editar_cliente.html"
    v_context_parms = {"form": form}
    return render(request, v_template, v_context_parms)


def remover_cliente(request, id=None):
    cliente = get_object_or_404(Cliente, id=id)

    if(request.method == 'POST'):
        cliente.delete()
        messages.warning(request, 'Cliente removido com sucesso')
        v_to = 'lista_de_clientes'
        return redirect(v_to)

    v_template = "clientes/remover_cliente.html"
    v_context_parms = {"cliente": cliente}
    return render(request, v_template, v_context_parms)
