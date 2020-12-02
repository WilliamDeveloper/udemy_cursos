from django.urls import path
from .views import lista_De_clientes

urlpatterns = [
    path('', lista_De_clientes),
]
