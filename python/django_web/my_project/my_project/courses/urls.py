from django.contrib import admin
from django.urls import path,include
from .views import index,details

app_name = 'my_project.courses'

urlpatterns = [
    path('', index, name='index'),

    # path('<int:id>/', details, name='details'),
    path('<slug:slug>/', details, name='details'),

]