virtualenv venv

D:\_dev_\work\github\udemy_cursos\python\django_web\venv\Scripts\activate.bat

pip install -r requirements.txt


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