from django.urls import path, include
from rest_framework import routers
from .views import AlunoViewSet

router = routers.DefaultRouter()

router.register('alunos',AlunoViewSet)

urlpatterns = [
    path('',router.urls),
]