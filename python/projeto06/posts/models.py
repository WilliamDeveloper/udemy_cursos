from django.db import models
from categorias.models import Categoria
from django.contrib.auth.models import User
from django.utils import timezone

from PIL import Image
from django.conf import  settings
import os

# Create your models here.

class Post(models.Model):
    titulo_post = models.CharField(max_length=255, verbose_name='Título' )
    autor_post = models.ForeignKey(User, on_delete=models.DO_NOTHING, verbose_name= 'Autor')
    data_post = models.DateTimeField(default=timezone.now, verbose_name='Data' )
    conteudo_post = models.TextField( verbose_name='Conteúdo' )
    excerto_post = models.TextField(verbose_name= 'Excerto')
    categoria_post = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING, blank=True, null=True , verbose_name= 'Categoria')
    imagem_post = models.ImageField(upload_to='post_img/%Y/%m/%d', blank=True, null=True, verbose_name='Imagem' )
    publicado_post = models.BooleanField(default=False, verbose_name='Publicado' )

    def __str__(self):
        return self.titulo_post

    def save(self, *args, **kwargs):
        print('save')

        super().save( *args, **kwargs)
        self.resize_image(self.imagem_post.name, 800)

    @staticmethod
    def resize_image(img_name, new_width):
        print(f'resize_image {img_name} {new_width}')

        img_path = os.path.join(settings.MEDIA_ROOT, img_name)
        print(img_path)

        img = Image.open(img_path)
        width, height = img.size
        print(width, height)

        new_height = (new_width * height) / width
        print(new_width, new_height)
