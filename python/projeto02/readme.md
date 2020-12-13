cd D:\_dev_\work\github\udemy_cursos\python\projeto02
virtualenv venv
D:\_dev_\work\github\udemy_cursos\python\projeto02\venv\Scripts\activate.bat

cd D:\_dev_\work\github\udemy_cursos\python\projeto02
pip install -r requirements.txt

django-admin startproject meusite .

python manage.py startapp blog

python manage.py runserver
python manage.py runserver 8888



