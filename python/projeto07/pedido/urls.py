from django.urls import path, include
from . import views


# para sevir de namespace
app_name='pedido'

urlpatterns = [
    path('', views.Pagar.as_view(), name='pagar'),
    path('salvar_pedido/', views.SalvarPedido.as_view(), name='salvar_pedido'),
    path('detalhe/', views.Detalhe.as_view(), name='detalhe'),
]