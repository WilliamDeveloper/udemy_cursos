from django.urls import path, include
from . import views

# para sevir de namespace
app_name = 'produto'

urlpatterns = [
    path('',views.ProdutosLista.as_view(), name='lista'),
    path('<slug>',views.ProdutoDetalhe.as_view(), name='detalhe'),
    path('carrinho_adicionar/',views.CarrinhoAdicionar.as_view(), name='carrinho_adicionar'),
    path('carrinho_remover/',views.CarrinhoRemover.as_view(), name='carrinho_remover'),
    path('carrinho/',views.Carrinho.as_view(), name='carrinho'),
    path('carrinho_resumo_compra/',views.CarrinhoResumoCompra.as_view(), name='carrinho_resumo_compra'),
    path('busca/',views.Busca.as_view(), name='busca'),
]