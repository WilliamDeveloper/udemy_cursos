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
python manage.py startapp accounts

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


--COLETAR ARQUIVOS STATICOS PARA PRODUCAO
python manage.py collectstatic


---------------------------------------
# instalando
sudo apt install python3-pip python3.7-dev python3.7-venv nginx curl

# atualizando pip e demais
python3.7 -m pip install --upgrade pip setuptools wheel --user
export PATH="/home/$USER/.local/bin:$PATH"
python3.7 -m pip install pipenv --user

# criando ambiente virtual
mkdir agenda
python3.7 -m venv venv
source venv/bin/activate
python3.7 -m pip install django gunicorn pillow
python3.7 -m pip install - r requirements

# sair do ambiente
deactivate
exit

mudar ALLOWED_HOSTS
(venv) gunicorn --bind 0.0.0.0:80 agenda.wsgi


---------------------------------------
#criando arquivo

## fonte
## https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04

sudo nano /etc/systemd/system/gunicorn.socket
###############################################################

# COLAR (SEM EDICAO)
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=socket.target
###############################################################

criar outro arquivo
sudo nano /etc/systemd/system/gunicorn.service
###############################################################

# editar e depois colar
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User= #######################USUARIO#######################################
Group=www-data
WorkingDirectory=/home/#######USUARIO#######/agenda
ExecStart=/home/#######USUARIO#######/agenda/venv/bin/gunicorn \
         --access-logfile - \
         --workers 3 \
         --bind unix:/run/gunicorn.sock \
         agenda.wsgi:application

[Install]
WantedBy=multi-user.target
         
         
###############################################################

# ativando
sudo systemctl start  gunicorn.socket
sudo systemctl enable gunicorn.socket

###############################################################

# checando
sudo systemctl status gunicorn.socket
sudo systemctl status gunicorn         
         
curl --unix-socket /run/gunicorn.sock localhost
sudo systemctl status gunicorn

###############################################################

sudo nano /etc/nginx/sites-enabled/sitedjango

###############################################################

# configurando o nginx server block

server {
    listen 80;
    server_name localhost;
    
    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/##############USUARIO##################/agenda;
    }
    
    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
