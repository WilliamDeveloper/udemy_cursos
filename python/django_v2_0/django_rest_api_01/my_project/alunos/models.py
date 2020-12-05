from django.db import models

# Create your models here.
class Aluno(models.Model):
    nome = models.CharField(max_length=200)
    profissao = models.CharField(max_length=200)
    ano_nasc =  models.PositiveSmallIntegerField()
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return self.nome