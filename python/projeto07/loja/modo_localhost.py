import os
from .settings import *

##########################################################
# configs custom -  MAQUINA_LOCAL
##########################################################
DEBUG = True

ALLOWED_HOSTS = []

LANGUAGE_CODE = 'pt-BR'
TIME_ZONE = 'America/Sao_Paulo'

FOLDER_GLOBAL_TEMPLATES= os.path.join(BASE_DIR,'templates')
FOLDER_GLOBAL_STATIC= os.path.join(BASE_DIR,'templates','static')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [FOLDER_GLOBAL_TEMPLATES,],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATICFILES_DIRS =[
    FOLDER_GLOBAL_STATIC,
]
STATIC_ROOT = os.path.join('static')

MEDIA_ROOT=os.path.join(BASE_DIR,'media')
MEDIA_URL="media/"


#usando messages do bootstrap
#sobrescrevendo as tag de alert do django para as tag do boostrap
from django.contrib.messages import constants

MESSAGE_TAGS ={
    constants.ERROR : 'alert-danger',
    constants.WARNING : 'alert-warning',
    constants.DEBUG : 'alert-info',
    constants.SUCCESS : 'alert-success',
    constants.INFO : 'alert-info',
}

# sumernote
# INSTALLED_APPS += ('django_summernote',)
# X_FRAME_OPTIONS = 'SAMEORIGIN'

# humanize
INSTALLED_APPS += ('django.contrib.humanize',)


# debug_toolbar - colocar sempre por ultimo
INSTALLED_APPS += ('debug_toolbar',)
MIDDLEWARE += ('debug_toolbar.middleware.DebugToolbarMiddleware',)


# config ssl off
SECURE_PROXY_SSL_HEADER = None
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False





## SESSAO
# Sessão em dias: 60s * 60m * 24h * 1d
SESSION_COOKIE_AGE = 60 * 60 * 24 * 7

# Salvar a cada requisição
SESSION_SAVE_EVERY_REQUEST = False

# Serializer - Padrão JSON
# SESSION_SERIALIZER = 'django.contrib.sessions.serializers.PickleSerializer'

# Para sessions em arquivos ao invés da base de dados
# SESSION_ENGINE = "django.contrib.sessions.backends.file"
# SESSION_FILE_PATH = '/home/luizotavio/Desktop/temp'