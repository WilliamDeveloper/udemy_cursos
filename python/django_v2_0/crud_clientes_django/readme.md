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
pip install django==2.1.7

##### mostrar todas dependencias do virtualenv
pip freeze

# criando projeto
django-admin startproject crud_clientes_django




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

# criando app clientes
###### django-admin startapp clientes
###### edit crud_clientes_django\crud_clientes_django\settings.py
###### edit crud_clientes_django\clientes\admin.py
###### edit crud_clientes_django\clientes\models.py
###### python manage.py makemigrations clientes
###### python manage.py migrate
