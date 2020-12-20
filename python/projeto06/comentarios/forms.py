from django.forms import ModelForm
from .models import Comentario

class FormComentario(ModelForm):

    def clean(self):
        data = self.cleaned_data

        print(data)

    class Meta:
        model = Comentario
        fields = (
            'nome_comentario',
            'email_comentario',
            'comentario',
        )