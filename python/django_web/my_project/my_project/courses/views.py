from django.shortcuts import render

from .models import Course

# Create your views here.
def index(request):
    courses = Course.objects.all()
    template_name = 'courses/index.html'
    v_params_contexto = {
        'courses' : courses
    }
    return render(request,template_name,v_params_contexto)
