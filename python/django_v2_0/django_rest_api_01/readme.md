# ambiente
###### pip install virtualenv

###### mkdir django_rest_api_01
###### cd django_rest_api_01
###### virtualenv venv
###### ./venv/Scripts/activate

###### pip install djangorestframework
###### pip install markdown
###### pip install django-filter

###### pip install django==2.1.5

---
# start project
django-admin startproject my_project

---
# start app
django-admin startapp alunos

---
# criar estrutura banco de dados
python manage.py migrate

---
# criar usuario para logar na aplicacao
python manage.py createsuperuser
ekatrs

---
# RODAR A APLICACAO
python manage.py runserver

---
# link de acesso
http:localhost:8000/
http:localhost:8000/admin


---
# ajuste projeto
###### python manage.py makemigrations
###### python manage.py migrate