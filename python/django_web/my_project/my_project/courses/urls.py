from django.contrib import admin
from django.urls import path,include
from .views import index,details, enrollment, announcements

app_name = 'my_project.courses'

urlpatterns = [
    path('', index, name='index'),

    # path('<int:id>/', details, name='details'),
    path('<slug:slug>/', details, name='details'),
    path('<slug:slug>/inscricao/', enrollment, name='enrollment'),
    path('<slug:slug>/anuncios/', announcements, name='announcements'),

]