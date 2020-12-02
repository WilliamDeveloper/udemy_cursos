from django.urls import path
from .views import lista_De_clientes,adicionar_cliente,editar_cliente

urlpatterns = [
    path('', lista_De_clientes,name='lista_De_clientes'),
    path('adicionar_cliente/', adicionar_cliente),
    path('editar_cliente/<int:id>', editar_cliente),
]
