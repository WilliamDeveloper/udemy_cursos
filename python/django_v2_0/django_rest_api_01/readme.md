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
# ajuste em model do projeto
###### edit my_project/my_project/settings.py > add "alunos" in "INSTALLED_APPS"
###### edit my_project/alunos/models.py
###### python manage.py makemigrations
###### python manage.py migrate
###### python manage.py runserver

# rest framework
###### pip3 install djangorestframework
###### edit my_project/my_project/urls.py
###### edit my_project/my_project/settings.py