from rest_framework import viewsets
from artigos_app.models import Autor
from .serializers import AutorSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class AutorViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    permission_classes = (AllowAny,)
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer