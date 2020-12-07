from django.contrib import admin
from django.urls import path,include
from .views import courses

urlpatterns = [
    path('', courses, name='index'),

]