
from django.shortcuts import render, redirect, reverse
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views import View
from django.http import HttpResponse
from django.contrib import messages

from . import models

# Create your views here.
class ProdutosLista(ListView):
    model = models.Produto
    template_name = 'produto/lista.html'
    context_object_name = 'produtos'
    paginate_by = 3
    # def get(self,*args,**kwargs):
    #     return HttpResponse('ProdutosLista')

class ProdutoDetalhe(DetailView):
    model = models.Produto
    template_name = 'produto/detalhe.html'
    context_object_name = 'produto'
    slug_url_kwarg = 'slug'


class CarrinhoAdicionar(View):
    def get(self,*args,**kwargs):

        v_msg = 'erro de teste'
        messages.error(
            self.request,
            v_msg,
        )
        # faz todas acoes e volta para pagina anterior
        # referer (pagina anterior q estava antes)
        http_referer = self.request.META.get(
            'HTTP_REFERER',
            reverse('produto:lista')
        )
        variacao_id = self.request.GET.get('vid')
        print(variacao_id)

        if not variacao_id:
            messages.error(
                self.request,
                'Produto não existe'
            )
        return redirect(http_referer)



        # return HttpResponse('CarrinhoAdicionar')

class CarrinhoRemover(View):
    def get(self,*args,**kwargs):
        return HttpResponse('CarrinhoRemover')

class Carrinho(View):
    def get(self,*args,**kwargs):
        return HttpResponse('Carrinho')

class CarrinhoFinalizar(View):
    def get(self,*args,**kwargs):
        return HttpResponse('CarrinhoFinalizar')