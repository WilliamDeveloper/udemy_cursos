#instalar virtualenv
pip install virtualenv

#criar um maq virtual
virtualenv venv

# ativar virtual env 
cd D:\_dev_\work\_config_\venv38\Scripts
D:\_dev_\work\_config_\venv38\Scripts\activate

# instalar django
pip install django==2.0

# mostrar todas dependencias do virtualenv
pip freeze

# criar projeto djanto chamado produtos
django-admin startproject produtos


# rodar aplicacao
cd D:\_dev_\work\github\udemy_cursos\python\django_v2_0\produtos\produtos 
python manage.py runserver