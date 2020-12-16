from django.shortcuts import render,get_object_or_404
from .models import Contato
from django.http import Http404

from django.core.paginator import Paginator

# Create your views here.
def index(request):
    # contatos = Contato.objects.all()
    # contatos = Contato.objects.order_by('nome') # ordem crescente
    # contatos = Contato.objects.order_by('-nome') # ordem decrescente
    contatos = Contato.objects\
        .order_by('-id')\
        .filter(
            mostrar=True
        )

    #fazendo a lista de objetos ficar paginada
    paginator = Paginator(contatos, 1)# itens por pagina
    page = request.GET.get('page')
    contatos = paginator.get_page(page)

    v_parametros = {
        'contatos':contatos,
    }
    return render(request,'contatos/index.html', v_parametros)


# Create your views here.
def contato_detalhe(request, contato_id):
    # contato = Contato.objects.get(id=contato_id)
    contato = get_object_or_404(Contato, id=contato_id)

    if (not contato.mostrar):
        raise Http404()

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


def busca(request):
    contatos = Contato.objects \
        .order_by('-id') \
        .filter(
        mostrar=True
    )

    # fazendo a lista de objetos ficar paginada
    paginator = Paginator(contatos, 1)  # itens por pagina
    page = request.GET.get('page')
    contatos = paginator.get_page(page)

    v_parametros = {
        'contatos': contatos,
    }
    return render(request, 'contatos/busca.html', v_parametros)