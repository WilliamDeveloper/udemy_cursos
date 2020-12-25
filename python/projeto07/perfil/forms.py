from django import forms
from django.contrib.auth.models import User
from . import models

class PerfilForm(forms.ModelForm):
    class Meta:
        model = models.Perfil
        fields = '__all__'
        exclude = ('usuario',)

class UserForm(forms.ModelForm):

    password = forms.CharField(
        required=False,
        widget=forms.PasswordInput(),
        label='Senha'
    )

    password2 = forms.CharField(
        required=False,
        widget=forms.PasswordInput(),
        label='Senha Confirmacao'
    )

    def __init__(self, usuario=None,*args,**kwargs):
        super().__init__(*args,**kwargs)

        self.usuario = usuario


    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'username',
            'password',
            'password2',
            'email',
        )

    def clean(self, *args, **kwargs):
        data = self.data
        cleaned = self.cleaned_data
        validation_error_msgs = {}

        usuario_data = data['username']
        password_data = data['password']
        email_data = data['email']
        usuario_db = User.objects.filter(username=usuario_data).first()

        if self.usuario:
            validation_error_msgs['username'] = 'saa'
        else:
            validation_error_msgs['username'] = 'saa'

        if(validation_error_msgs):
            raise(forms.ValidationError(validation_error_msgs))