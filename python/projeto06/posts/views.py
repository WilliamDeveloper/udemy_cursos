from django.shortcuts import render, redirect
from django.views.generic.list import ListView
from django.views.generic.edit import UpdateView
from .models import Post
from django.db.models import Q, Count, Case, When
from comentarios.forms import FormComentario
from comentarios.models import Comentario
from django.contrib import messages


# Create your views here.

class PostIndex(ListView) :
    model = Post
    template_name = 'posts/index.html'
    paginate_by = 2
    context_object_name = 'posts'

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.order_by('-id')

        qs = qs.annotate(
            numero_comentarios=Count(
                Case(
                    When(comentario__publicado_comentario=True, then=1)
                )
            )
        )

        return qs


class PostBusca(PostIndex) :
    template_name = 'posts/post_busca.html'

    def get_queryset(self):
        qs = super().get_queryset()

        termo = self.request.GET.get('termo')
        print(termo)

        if not termo:
            return qs

        qs = qs.filter(
          Q(titulo_post__icontains=termo)
          | Q(autor_post__first_name__iexact=termo)
          | Q(conteudo_post__icontains=termo)
          | Q(excerto_post__icontains=termo)
          | Q(categoria_post__nome_cat__iexact=termo)
        )

        return qs



class PostCategoria(PostIndex) :
    template_name = 'posts/post_categoria.html'

    def get_queryset(self):
        qs = super().get_queryset()

        print(self.kwargs)
        categoria = self.kwargs.get('categoria', None)
        print('categoria: ', categoria)
        if not categoria:
            return qs


        qs = qs.filter(
            categoria_post__nome_cat__iexact=categoria
        )



        return qs



class PostDetalhes(UpdateView) :
    template_name = 'posts/post_detalhes.html'
    model = Post
    form_class = FormComentario
    context_object_name = 'post'

    def form_valid(self, form):
        post = self.get_object()
        comentario = Comentario(**form.cleaned_data)
        comentario.post_comentario = post

        if self.request.user.is_authenticated:
            comentario.usuario_comentario = self.request.user

        comentario.save()
        messages.success(self.request, 'Comentário enviado com sucesso!')

        return redirect('post_detalhes',pk=post.id)
