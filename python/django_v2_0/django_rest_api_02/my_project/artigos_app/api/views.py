from rest_framework import viewsets
from artigos_app.api.models import Autor
from .serializers import AutorSerializer

class AutorViewSet(viewsets.ModelViewSet):
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer