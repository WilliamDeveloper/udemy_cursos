
from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views import View
from django.http import HttpResponse
from django.contrib import messages
from django.db.models import Q

from perfil.models import Perfil
from . import models
from pprint import pprint

# Create your views here.
class ProdutosLista(ListView):
    model = models.Produto
    template_name = 'produto/lista.html'
    context_object_name = 'produtos'
    paginate_by = 3
    ordering = ['-id']
    # def get(self,*args,**kwargs):
    #     return HttpResponse('ProdutosLista')

class Busca(ProdutosLista):
    def get_queryset(self,*args,**kwargs):
        termo = self.request.GET.get('termo') or self.request.session['termo']
        qs = super().get_queryset(*args,**kwargs)

        if not termo:
            return qs

        self.request.session['termo'] = termo

        qs = qs.filter(
            Q(nome__icontains=termo)|
            Q(descricao_curta__icontains=termo) |
            Q(descricao_longa__icontains=termo)
        )

        self.request.session.save()
        return qs


class ProdutoDetalhe(DetailView):
    model = models.Produto
    template_name = 'produto/detalhe.html'
    context_object_name = 'produto'
    slug_url_kwarg = 'slug'


class CarrinhoAdicionar(View):
    def get(self,*args,**kwargs):

        # if self.request.session.get('carrinho'):
        #     del self.request.session['carrinho']
        #     self.request.session.save()

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

        variacao = get_object_or_404(models.Variacao, id=variacao_id)
        produto = variacao.produto

        produto_id = produto.id
        produto_nome = produto.nome
        variacao_nome = variacao.nome or ''
        preco_unitario = variacao.preco
        preco_unitario_promocional = variacao.preco_promocional
        quantidade = 1
        slug = produto.slug
        imagem = produto.imagem
        variacao_estoque = variacao.estoque

        preco_quantitativo=''
        preco_quantitativo_promocional = ''

        print('imagem:', imagem)
        if imagem:
            imagem = imagem.name
            print('imagem:', imagem)
        else:
            imagem = ''


        if(variacao.estoque < 1 ):
            messages.error(
                self.request,
                'Estoque insuficiente'
            )
            return redirect(http_referer)

        if not self.request.session.get('carrinho'):
            self.request.session['carrinho'] = {}
            self.request.session.save()

        carrinho = self.request.session['carrinho']

        if variacao_id in carrinho:
            quantidade_carrinho = carrinho[variacao_id]['quantidade']
            quantidade_carrinho += 1

            if variacao_estoque < quantidade_carrinho :
                messages.warning(
                    self.request,
                    f'Estoque insuficiente para {quantidade_carrinho}x no "{produto_nome}".'
                    f'Adicionamos {variacao_estoque}x no seu carrinho.'
                )
                quantidade_carrinho = variacao_estoque
            carrinho[variacao_id]['quantidade'] = quantidade_carrinho
            carrinho[variacao_id]['preco_quantitativo'] = preco_unitario * quantidade_carrinho
            carrinho[variacao_id]['preco_quantitativo_promocional'] = preco_unitario_promocional * quantidade_carrinho


        else:
            carrinho[variacao_id] = {
                'produto_id' : produto_id,
                'produto_nome': produto_nome,
                'variacao_nome': variacao_nome,
                'variacao_id': variacao_id,
                'preco_unitario': preco_unitario,
                'preco_unitario_promocional': preco_unitario_promocional,
                'preco_quantitativo': preco_unitario,
                'preco_quantitativo_promocional': preco_unitario_promocional,
                'quantidade': 1,
                'slug': slug,
                'imagem': imagem,
            }

        self.request.session.save()
        pprint(carrinho)

        messages.success(
            self.request,
            f'Produto {produto_nome} {variacao_nome} adicionado ao seu carrinho {carrinho[variacao_id]["quantidade"]}x'
        )
        return redirect(http_referer)



        # return HttpResponse('CarrinhoAdicionar')

class CarrinhoRemover(View):
    def get(self,*args,**kwargs):
        http_referer = self.request.META.get(
            'HTTP_REFERER',
            reverse('produto:lista')
        )
        variacao_id = self.request.GET.get('vid')

        if not variacao_id:
           return redirect(http_referer)

        if not self.request.session.get('carrinho'):
            return redirect(http_referer)

        if variacao_id not in self.request.session.get('carrinho'):
            return redirect(http_referer)

        carrinho = self.request.session['carrinho'][variacao_id]

        messages.success(
            self.request,
            f'produto {carrinho["produto_nome"]} {carrinho["variacao_nome"]}'
            f' removido do seu carrinho.'
        )

        del self.request.session['carrinho'][variacao_id]
        self.request.session.save()

        return redirect(http_referer)

class Carrinho(View):
    def get(self,*args,**kwargs):
        carrinho = self.request.session.get('carrinho',{})
        contexto = {
            'carrinho': carrinho
        }
        print('CCCARRINHO ', carrinho )
        return render(self.request, 'produto/carrinho.html',contexto)

class CarrinhoResumoCompra(View):
    def get(self,*args,**kwargs):

        if not self.request.user.is_authenticated:
            return redirect('perfil:criar')

        perfil = Perfil.objects.filter(usuario=self.request.user).exists()
        if not perfil:
            messages.error(
                self.request,
                'Usuário sem perfil'
            )
            return redirect('perfil:criar')

        if not self.request.session.get('carrinho'):
            messages.error(
                self.request,
                'Seu carrinho esta vazio'
            )
            return redirect('perfil:lista')

        contexto={
            'usuario': self.request.user,
            'carrinho': self.request.session['carrinho']
        }
        return render(self.request,'produto/carrinho_resumo_compra.html', contexto)


