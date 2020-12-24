from django.urls import path, include
from . import views


# para sevir de namespace
app_name='pedido'

urlpatterns = [
    path('', views.Pagar.as_view(), name='pagar'),
    path('fechar_pedido/', views.FecharPedido.as_view(), name='fechar_pedido'),
    path('detalhe/', views.Detalhe.as_view(), name='detalhe'),
]