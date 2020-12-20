from django.contrib import admin

# Register your models here.
class ComentarioAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'nome_comentario',
        'email_comentario',
        'publicado_comentario',
    )

    list_editable = (
        'publicado_comentario',
    )

    list_display_links = (
        'id',
        'nome_comentario',
        'email_comentario',
    )