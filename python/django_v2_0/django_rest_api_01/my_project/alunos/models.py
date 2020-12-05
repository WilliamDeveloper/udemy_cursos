from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from datetime import datetime

# Create your models here.
class Aluno(models.Model):
    nome = models.CharField(max_length=200)
    profissao = models.CharField(max_length=200)
    ano_nasc =  models.PositiveSmallIntegerField(validators=[MinValueValidator(1970),MaxValueValidator(datetime.now().year)])
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return self.nome