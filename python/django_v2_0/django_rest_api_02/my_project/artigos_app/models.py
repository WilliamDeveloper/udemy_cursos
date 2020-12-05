from django.db import models

# Create your models here.
class Autor(models.Model):
    nome = models.CharField(max_length=255)
    endereco = models.CharField(max_length=255)
    site = models.URLField(blank=True,null=True)
    email = models.EmailField()

    def __str__(self):
        return self.nome

class Artigo(models.Model):
    autor = models.ForeignKey(Autor,on_delete=models.CASCADE)