cd D:\_dev_\work\github\udemy_cursos\python\projeto02
virtualenv venv
D:\_dev_\work\github\udemy_cursos\python\projeto02\venv\Scripts\activate.bat

cd D:\_dev_\work\github\udemy_cursos\python\projeto02
pip install -r requirements.txt

django-admin startproject site .

python manage.py runserver
python manage.py runserver 8888

python manage.py startapp blog
python manage.py startapp produto
python manage.py startapp sobre

