from artigos_app.models import Autor
from rest_framework import serializers

class AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields = ('nome','endereco','site','email')