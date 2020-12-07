from django.shortcuts import render,get_object_or_404

from .models import Course
from .forms import ContactCourse
# Create your views here.
def index(request):
    courses = Course.objects.all()

    v_params_contexto = {
        'courses' : courses
    }
    template_name = 'courses/index.html'
    return render(request,template_name,v_params_contexto)

# def details(request,id):
#     # course = Course.objects.get(pk=id)
#     course = get_object_or_404(Course,pk=id)
#
#     v_params_contexto = {
#         'course' : course
#     }
#     template_name = 'courses/details.html'
#     return render(request,template_name,v_params_contexto)

def details(request,slug):
# course = Course.objects.get(pk=id)
    course = get_object_or_404(Course,slug=slug)

    if (request.method == 'POST'):
        form = ContactCourse(request.POST)
    else:
        form = ContactCourse()

    v_params_contexto = {
        'course' : course,
        'form' : form
    }
    template_name = 'courses/details.html'
    return render(request,template_name,v_params_contexto)