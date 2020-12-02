# ambiente

##### instalar virtualenv
pip install virtualenv

##### criar um maq virtual
virtualenv venv

##### ativar virtual env 
cd D:\_dev_\work\_config_\venv38\Scripts
D:\_dev_\work\_config_\venv38\Scripts\activate

##### instalar django
pip install django==2.0

##### mostrar todas dependencias do virtualenv
pip freeze

---
# criando projeto

##### criar projeto django chamado produtos
django-admin startproject produtos

---
# iniciando aplicacao

##### rodar aplicacao
cd D:\_dev_\work\github\udemy_cursos\python\django_v2_0\produtos\produtos 
python manage.py runserver

#####  url admin do django
http://127.0.0.1:8000/admin/login/?next=/admin

#####  criar tabelas
cd D:\_dev_\work\github\udemy_cursos\python\django_v2_0\produtos\produtos
python manage.py migrate

#####  criar super usuario
python manage.py createsuperuser 
user: ekatrs

#####  url admin do django
http://127.0.0.1:8000/admin/login/?next=/admin
http://127.0.0.1:8000/admin

---
# criando um app(modulo)
python manage.py startapp items
###### edit produtos\produtos\settings.py
###### edit produtos\items\models.py
###### edit produtos\items\admin.py
###### edit produtos\items\views.py
python manage.py makemigrations items
python manage.py migrate

##### criando rotas
###### edit produtos\produtos\urls.py

##### criando template
###### edit produtos\produtos\settings.py
````python
TEMPLATE_DIR = os.path.join(BASE_DIR,'templates')
STATIC_DIR = os.path.join(BASE_DIR,'static')
````

# forms
###### create   produtos\templates\items\create_produto.html
###### create   produtos\items\forms.py
###### edit     produtos\items\views.py
###### edit     produtos\produtos\urls.py   

