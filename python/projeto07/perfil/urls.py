from django.urls import path, include
from . import views

# para sevir de namespace
app_name='perfil'

urlpatterns = [
    path('',views.Criar.as_view(), name='criar'),
    path('',views.Atualizar.as_view(), name='atualizar'),
    path('',views.Login.as_view(), name='login'),
    path('',views.Logout.as_view(), name='logout'),
]