from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class CourseManager(models.Manager):

    def search(self,query):
        # AND
        # return self.get_queryset().filter(
        #     name__icontains=query,
        #     description__icontains=query
        # )

        # OR
        return self.get_queryset().filter(
            models.Q(name__icontains=query) |
            models.Q(description__icontains=query)
        )

class Course(models.Model):
    name = models.CharField('Nome', max_length=100)
    slug = models.SlugField('Atalho')
    description = models.TextField('Descrição Simples',blank=True)
    about = models.TextField('Sobre o curso',blank=True)
    start_date = models.DateField('Data de Início', null=True, blank=True)

    image = models.ImageField(
        upload_to='courses/images',
        verbose_name='Imagem',
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField('Criado em', auto_now_add=True)
    updated_at = models.DateTimeField('Atualizado em', auto_now=True)

    #sobrescrevendo o comportamento padrao do objects do django
    objects = CourseManager()

    def __str__(self):
        return self.name


    def get_absolute_url(self):
        return f'/cursos/{self.slug}'

    class Meta:
        verbose_name='Curso'
        verbose_name_plural='Cursos'
        # ordering = ['-name'] # decrescente
        ordering = ['name'] # crescente


class Enrollment(models.Model):

    STATUS_CHOICES = (
        (0,'Pendente'),
        (1, 'Aprovado'),
        (2, 'Cancelado'),
    )

    user = models.ForeignKey(
        User,
        verbose_name='Usuário',
        related_name='enrollments',
        on_delete=models.CASCADE
    )

    course = models.ForeignKey(
        Course,
        verbose_name='Curso',
        related_name='enrollments',
        on_delete=models.CASCADE
    )

    status = models.IntegerField(
        'Situação',
        choices=STATUS_CHOICES,
        default=0,
        blank=True
    )

    created_at = models.DateTimeField('Criado em', auto_now_add=True)
    updated_at = models.DateTimeField('Atualizado em', auto_now=True)

    def active(self):
        self.status = 1
        self.save()

    def is_approved(self):
        return self.status == 1

    class Meta:
        verbose_name = 'Inscrição'
        verbose_name_plural = 'Inscrições'
        unique_together =( ('user', 'course'), )
