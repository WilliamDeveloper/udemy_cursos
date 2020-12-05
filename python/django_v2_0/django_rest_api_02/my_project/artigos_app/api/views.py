from rest_framework import viewsets
from artigos_app.models import Autor,Artigo
from .serializers import AutorSerializer,ArtigoSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly

class AutorViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    # permission_classes = (AllowAny,)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer

class ArtigoViewSet(viewsets.ModelViewSet):
    queryset = Artigo.objects.all()
    serializer_class = ArtigoSerializer