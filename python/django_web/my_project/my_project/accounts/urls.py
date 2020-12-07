from django.contrib import admin
from django.urls import path,include
from django.contrib.auth.views import LoginView



app_name = 'my_project.accounts'

urlpatterns = [
    path('entrar/', LoginView.as_view(), {'template_name':'accounts/login.html'},name='login'),
    # path('entrar/', LoginView.as_view(), {'template_name':'accounts/register.html'},name='register'),
]