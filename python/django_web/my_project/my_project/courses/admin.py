from django.contrib import admin
from .models import Course


class CourseAdmin(admin.ModelAdmin):
    list_display = ['name','slug','start_date','created_at']
    search_fields = ['name','slug']


# Register your models here.
admin.site.register(Course,CourseAdmin)
