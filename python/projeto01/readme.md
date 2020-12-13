cd D:\_dev_\work\github\udemy_cursos\python\projeto01
virtualenv venv
D:\_dev_\work\github\udemy_cursos\python\projeto01\venv\Scripts\activate.bat

cd D:\_dev_\work\github\udemy_cursos\python\projeto01
pip install -r requirements.txt

django-admin startproject projeto .

python manage.py runserver
python manage.py runserver 8888