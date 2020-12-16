from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:contato_id>', views.contato_detalhe, name='contato_detalhe'),
    path('busca/', views.index, name='busca'),
]
