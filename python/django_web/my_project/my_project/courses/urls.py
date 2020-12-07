from django.contrib import admin
from django.urls import path,include
from .views import courses

app_name = 'my_project.courses'

urlpatterns = [
    path('', courses, name='index'),

]