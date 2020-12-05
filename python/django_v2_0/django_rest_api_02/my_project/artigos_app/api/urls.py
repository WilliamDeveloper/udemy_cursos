from django.urls import path, include
from .views import AutorViewSet
from rest_framework import routers

router = routers.DefaultRouter()

router.register('autor',AutorViewSet)

urlpatterns =[
    path('', include(router.urls))
]