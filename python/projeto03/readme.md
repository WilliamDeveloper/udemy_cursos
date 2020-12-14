cd D:\_dev_\work\github\udemy_cursos\python\projeto03
virtualenv venv
D:\_dev_\work\github\udemy_cursos\python\projeto03\venv\Scripts\activate.bat

cd D:\_dev_\work\github\udemy_cursos\python\projeto03
pip install -r requirements.txt

django-admin startproject TESTE .

python manage.py startapp paginas

python manage.py runserver
python manage.py runserver 8888



