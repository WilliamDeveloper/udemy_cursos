from rest_framework import serializers
from artigos_app.models import Autor

class AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields = ('nome','endereco','site','email')