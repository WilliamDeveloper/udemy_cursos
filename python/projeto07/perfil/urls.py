from django.urls import path, include
from . import views

# para sevir de namespace
app_name='perfil'

urlpatterns = [
    path('',views.Criar.as_view(), name='')
]