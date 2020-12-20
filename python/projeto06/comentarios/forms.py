from django.forms import ModelForm
from .models import Comentario

class FormComentario(ModelForm):

    def clean(self):
        data = self.cleaned_data
        print(data)

        nome = self.data.get('nome_comentario')
        email = self.data.get('email_comentario')
        comentario = self.data.get('comentario')

        if len(nome) < 5:
            self.add_error(
                'nome_comentario',
                'Nome precisa ter mais que 5 caracteres.'
            )



    class Meta:
        model = Comentario
        fields = (
            'nome_comentario',
            'email_comentario',
            'comentario',
        )