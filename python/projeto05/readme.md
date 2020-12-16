https://docs.djangoproject.com/en/2.2/
https://docs.djangoproject.com/en/2.2/topics/pagination/

https://getbootstrap.com/docs/4.0/components/pagination/
https://getbootstrap.com/docs/4.0/components/alerts/


-- criando estrutura basica do django do zero
---
cd D:\_dev_\work\github\udemy_cursos\python\projeto05
virtualenv venv
D:\_dev_\work\github\udemy_cursos\python\projeto05\venv\Scripts\activate.bat

cd D:\_dev_\work\github\udemy_cursos\python\projeto05
pip install -r requirements.txt

django-admin startproject agenda .

python manage.py startapp contatos

python manage.py runserver
python manage.py runserver 8888



---
python manage.py makemigrations
python manage.py migrate
python manage.py runserver


---
python manage.py createsuperuser
admin 
admin
http:localhost:8000/admin
python manage.py runserver


