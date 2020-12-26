from django.shortcuts import render, redirect
from django.views.generic import ListView
from django.views import View
from django.http import HttpResponse

from django.contrib import messages

from produto.models import Variacao
from utils import utils

from .models import Pedido, ItemPedido

# Create your views here.
class Pagar(View) :
    template_name = 'pedido/pagar.html'

    def get(self,*args,**kwargs):

        if not self.request.user.is_authenticated:
            messages.error(
                self.request,
                'voce precisa fazer login'
            )
            return redirect('perfil:criar')

        if not self.request.session.get('carrinho'):
            messages.error(
                self.request,
                'carrinho vazio'
            )
            return redirect('produto:lista')


        carrinho = self.request.session.get('carrinho')
        carrinho_variacao_ids = [v for v in carrinho]

        print(carrinho_variacao_ids)

        bd_variacoes = Variacao.objects.select_related('produto').filter(id__in= carrinho_variacao_ids)
        bd_variacoes = list(bd_variacoes)



        print(bd_variacoes)

        for variacao in bd_variacoes:
            vid = str(variacao.id)
            estoque = variacao.estoque
            qtd_carrinho =carrinho[vid]['quantidade']

            preco_unitario = carrinho[vid]['preco_unitario']
            preco_unitario_promocional = carrinho[vid]['preco_unitario_promocional']

            error_msg_estoque=''

            if estoque < qtd_carrinho:
                carrinho[vid]['quantidade'] = estoque
                carrinho[vid]['preco_quantitativo'] = estoque * preco_unitario
                carrinho[vid]['preco_unitario_promocional'] = estoque * preco_unitario_promocional

                error_msg_estoque = """
                            Estoque insuficiente para alguns produtos do seu carrinho.
                            Reduzimos a quantidade dessses produtos.
                            Por favor revise os produtos no carrinho.
                        """

                if error_msg_estoque:
                    messages.error(
                        self.request,
                        error_msg_estoque
                    )
                    self.request.session.save()

                    return redirect('produto:carrinho')

        qtd_total_carrinho = utils.cart_total_qtd(carrinho)
        valor_total_carrinho = utils.cart_totals(carrinho)

        pedido = Pedido(
            usuario=self.request.user,
            total=valor_total_carrinho,
            qtd_total=qtd_total_carrinho,
            status = 'C',
        )

        pedido.save()

        ItemPedido.objects.bulk_create(
            [
                ItemPedido(
                    pedido=pedido,
                    produto=v['produto_nome'],
                    produto_id=v['produto_id'],
                    variacao=v['variacao_nome'],
                    variacao_id=v['variacao_id'],
                    preco=v['preco_quantitativo'],
                    preco_promocional=v['preco_quantitativo_promocional'],
                    quantidade=v['quantidade'],
                    imagem=v['imagem'],
                ) for v in carrinho.values()
            ]
        )

        # contexto={
        #     'qtd_total_carrinho':qtd_total_carrinho,
        #     'valor_total_carrinho' : valor_total_carrinho,
        # }

        # return render(self.request, self.template_name, contexto)
        del self.request.session['carrinho']

        return redirect('pedido:lista')




class SalvarPedido(View) :
    def get(self,*args,**kwargs):
        return HttpResponse('FecharPedido')

class Detalhe(View) :
    def get(self,*args,**kwargs):
        return HttpResponse('Detalhe')


class Lista(View) :
    def get(self,*args,**kwargs):
        return HttpResponse('Lista')