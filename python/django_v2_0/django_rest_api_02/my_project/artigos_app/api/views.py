from rest_framework import viewsets
from artigos_app.models import Autor
from .serializers import AutorSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly

class AutorViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    # permission_classes = (AllowAny,)
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer