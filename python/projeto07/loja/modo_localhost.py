import os
# from . import settings as settings_projeto
from django.conf import settings


##########################################################
# configs custom -  MAQUINA_LOCAL
##########################################################
DEBUG = True

ALLOWED_HOSTS = []

LANGUAGE_CODE = 'pt-BR'
TIME_ZONE = 'America/Sao_Paulo'

FOLDER_GLOBAL_TEMPLATES= os.path.join(settings.BASE_DIR,'templates')
FOLDER_GLOBAL_STATIC= os.path.join(settings.BASE_DIR,'templates','static')

print('base_dir: ',settings.BASE_DIR)
print('base_dir: ',settings.BASE_DIR)


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
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(settings.BASE_DIR,'static')
STATICFILES_DIRS =[
    FOLDER_GLOBAL_STATIC,
]


MEDIA_URL="media/"
MEDIA_ROOT=os.path.join(settings.BASE_DIR,'media')


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
settings.INSTALLED_APPS += ('django.contrib.humanize',)

# crispy_forms
settings.INSTALLED_APPS += ('crispy_forms',)
settings.CRISPY_TEMPLATE_PACK = 'bootstrap4'

# debug_toolbar - colocar sempre por ultimo
settings.INSTALLED_APPS += ('debug_toolbar',)
settings.MIDDLEWARE += ('debug_toolbar.middleware.DebugToolbarMiddleware',)





# config ssl off
SECURE_PROXY_SSL_HEADER = None
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False





## SESSAO - tempo cookie sessao
# Sessão em dias: 60s * 60m * 24h * 1d
SESSION_COOKIE_AGE = 60 * 60 * 24 * 7

# Salvar a cada requisição
SESSION_SAVE_EVERY_REQUEST = False

# Serializer - Padrão JSON
# SESSION_SERIALIZER = 'django.contrib.sessions.serializers.PickleSerializer'

# Para sessions em arquivos ao invés da base de dados
# SESSION_ENGINE = "django.contrib.sessions.backends.file"
# SESSION_FILE_PATH = '/home/luizotavio/Desktop/temp'

INTERNAL_IPS =[
    #....
    '127.0.0.1',
    #....
]