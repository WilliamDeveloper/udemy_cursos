from django.db import models

# Create your models here.
class Autor(models.Model):
    nome = models.CharField(max_length=255)
    endereco = models.CharField(max_length=255)
    site = models.URLField(blank=True,null=True)
    email = models.EmailField()