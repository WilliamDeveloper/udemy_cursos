from django.contrib import admin
from django.urls import path,include
from django.contrib.auth.views import LoginView



app_name = 'my_project.accounts'

urlpatterns = [
    path('entrar/', LoginView, {'template_name':'accounts/login.html'},name='login'),
]