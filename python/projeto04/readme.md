cd D:\_dev_\work\github\udemy_cursos\python\projeto04
virtualenv venv
D:\_dev_\work\github\udemy_cursos\python\projeto04\venv\Scripts\activate.bat

cd D:\_dev_\work\github\udemy_cursos\python\projeto04
pip install -r requirements.txt

django-admin startproject agenda .

python manage.py startapp contatos

python manage.py runserver
python manage.py runserver 8888



