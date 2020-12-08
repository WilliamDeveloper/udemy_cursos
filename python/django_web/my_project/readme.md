virtualenv venv

D:\_dev_\work\github\udemy_cursos\python\django_web\my_project\venv\Scripts\activate.bat

pip install -r requirements.txt

pip freeze

---
# start project
django-admin startproject my_project
---
# criar estrutura banco de dados
python manage.py makemigrations
python manage.py migrate
---
# criar usuario para logar na aplicacao
python manage.py createsuperuser
admin
admin
---
# start app
django-admin startapp core
django-admin startapp courses
django-admin startapp accounts

---
# RODAR A APLICACAO
python manage.py runserver

---
# link de acesso
http:localhost:8000/
http:localhost:8000/admin

https://docs.djangoproject.com/pt-br/2.1/topics/auth/default/