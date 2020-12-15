from django.shortcuts import render,get_object_or_404
from .models import Contato

# Create your views here.
def index(request):
    contatos = Contato.objects.all()
    v_parametros = {
        'contatos':contatos,
    }
    return render(request,'contatos/index.html', v_parametros)


# Create your views here.
def contato_detalhe(request, contato_id):
    # contato = Contato.objects.get(id=contato_id)
    contato = get_object_or_404(Contato, id=contato_id)
    v_parametros = {
        'contato':contato,
    }
    return render(request,'contatos/contato_detalhe.html', v_parametros)


# uma forma de lancar pagina 404 generica
# from django.http import Http404
# def contato_detalhe(request, contato_id):
#     try:
#         contato = Contato.objects.get(id=contato_id)
#         v_parametros = {
#             'contato':contato,
#         }
#         return render(request,'contatos/contato_detalhe.html', v_parametros)
#     except Contato.DoesNotExist as e:
#         raise  Http404()