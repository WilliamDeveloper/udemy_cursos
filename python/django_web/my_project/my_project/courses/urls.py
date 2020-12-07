from django.contrib import admin
from django.urls import path,include
from .views import index

app_name = 'my_project.courses'

urlpatterns = [
    path('', index, name='index'),

]