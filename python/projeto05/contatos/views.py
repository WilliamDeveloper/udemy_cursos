from django.shortcuts import render,get_object_or_404,redirect
from .models import Contato
from django.http import Http404
from django.db.models import Q, Value
from django.db.models.functions import  Concat

from django.core.paginator import Paginator

from django.contrib import messages

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

    termo = request.GET.get('termo')
    print(termo)

    # if termo is None or not termo :
    #     raise Http404()

    if termo is None or not termo :
        v_msg = 'Campo termo nao pode ser vazio'
        messages.add_message(request, messages.ERROR, v_msg)
        messages.add_message(request, messages.WARNING, v_msg)
        messages.add_message(request, messages.DEBUG, v_msg)
        messages.add_message(request, messages.SUCCESS, v_msg)
        messages.add_message(request, messages.INFO, v_msg)
        return redirect('index')

    campos = Concat('nome',Value(' '), 'sobrenome')

    # contatos = Contato.objects \
    #     .order_by('-id') \
    #     .filter(
    #
    #     # nome=termo,
    #     nome__icontains=termo,
    #
    #     mostrar=True
    # )

    # AND - nome__icontains=termo, sobrenome__icontains=termo, nome_completo__icontains=termo,
    # OR  - Q(nome__icontains=termo) | Q(sobrenome__icontains=termo) | Q(nome_completo__icontains=termo),

    contatos = Contato.objects.order_by('-id')
    contatos = contatos.annotate(
        nome_completo=campos
    )
    contatos = contatos.filter(
    Q(nome__icontains=termo)| Q(sobrenome__icontains=termo) |Q(nome_completo__icontains=termo) | Q(telefone__icontains=termo),

        mostrar=True
    )


    # ver como esta a query do filter ateh o momento
    print(contatos.query)


    # fazendo a lista de objetos ficar paginada
    paginator = Paginator(contatos, 1)  # itens por pagina
    page = request.GET.get('page')
    contatos = paginator.get_page(page)

    v_parametros = {
        'contatos': contatos,
    }


    return render(request, 'contatos/busca.html', v_parametros)