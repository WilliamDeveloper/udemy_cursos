from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render,get_object_or_404, redirect

from .models import Course,Enrollment
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

    v_params_contexto= {}

    if (request.method == 'POST'):
        form = ContactCourse(request.POST)
        if (form.is_valid()):
            v_params_contexto['is_valid'] = True
            print(form.cleaned_data)
            form.send_mail(course)
            form = ContactCourse()
    else:
        form = ContactCourse()

    v_params_contexto['course'] = course
    v_params_contexto['form'] = form

    template_name = 'courses/details.html'
    return render(request,template_name,v_params_contexto)

@login_required
def enrollment(request,slug):
    course = get_object_or_404(Course,slug=slug)
    enrollment,created = Enrollment.objects.get_or_create(
        user = request.user, course=course
    )

    if  created :
        enrollment.active()
        messages.success(request,'Você foi inscrito no curso com sucesso')
    else:
        messages.info(request,'Você já esta escrito no curso')


    return  redirect('accounts:dashboard')


@login_required
def announcements(request,slug):
    course = get_object_or_404(Course,slug=slug)
    enrollment = get_object_or_404(
        Enrollment,
        user=request.user, course=course
    )
