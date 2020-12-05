# criando projeto
###### mkdir django_rest_api_02
###### cd django_rest_api_02

# isolar bibliotecas do projeto
###### pip install virtualenv
###### virtualenv venv

# ativando context venv do projeto
###### ./venv/Scripts/activate
###### D:\_dev_\work\github\udemy_cursos\python\django_v2_0\django_rest_api_02\venv\Scripts\activate.bat

# desativando context venv ativo
###### deactivate

---

# requisitos
###### pip install django==2.1.5
###### pip install djangorestframework
###### pip install markdown
###### pip install django-filter

# gerar um txt com todas dependencias do projeto
##### pip freeze > requirements.txt
##### python -m pip freeze > requirements.txt

# instalar dependencias apartir de um txt
##### pip install -r requirements.txt
##### python -m pip install -r requirements.txt

---

# start project
django-admin startproject my_project

---
# start app (modulo)
django-admin startapp artigos_app

---
# ajuste new app
###### edit my_project/my_project/settings.py > add "artigos_app" in "INSTALLED_APPS"
###### edit my_project/alunos/models.py
###### python manage.py makemigrations
###### python manage.py migrate
###### python manage.py runserver

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






