from django.contrib import admin
from django.urls import path,include
from django.contrib.auth.views import LoginView, LogoutView
from .views import register,dashboard,edit,edit_password



app_name = 'my_project.accounts'

urlpatterns = [
    path(
        'entrar/',
         LoginView.as_view(
            template_name='accounts/login.html',
         ),
         name='login'
    ),



    path(
        'sair/',
         LogoutView.as_view(
            next_page='core:home',
         ),
         name='logout'
    ),

    path('cadastre-se/', register, name='register'  ),
    path('', dashboard, name='dashboard'  ),
    path('editar/', edit, name='edit'  ),
    path('dashboard_edit_password/', edit_password, name='edit_password'  ),
]