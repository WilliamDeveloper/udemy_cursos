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

# criando projeto

##### criar projeto django chamado produtos
django-admin startproject produtos

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
