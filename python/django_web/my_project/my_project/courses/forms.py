from django import  forms
from django.core.mail import send_mail
from django.conf import settings

class ContactCourse(forms.Form):
    name = forms.CharField(label='Nome', max_length=100)
    email = forms.EmailField(label='Email')
    message = forms.CharField(
        label='Mensagem/Dúvida',
        widget=forms.Textarea,
    )

    def send_mail(self,course):
        subject = f'[{course}] Contato'
        message = 'Nome: {name};E-mail:{email};{message}'
        v_params_contexto = {
            'name': self.cleaned_data['name'],
            'email': self.cleaned_data['email'],
            'message': self.cleaned_data['message'],
        }
        message = message.format(**v_params_contexto)
        v_from = settings.DEFAULT_FROM_EMAIL
        v_to_lista_send = [settings.CONTACT_EMAIL]

        print(message)
        send_mail(subject,message, v_from,v_to_lista_send)