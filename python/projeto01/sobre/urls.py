from django.urls import path
from . import views

urlpatterns =[
    path('', views.index), # /sobre
    path('teste/', views.teste), # /sobre/teste
]