# binario basico do ambiente virtual isolado
pip install virtualenv

# criar pasta do projeto
mkdir my_proj

# ambiente virtual - CRIAR
cd my_proj
virtualenv venv -p /caminho/python3

# ambiente virtual - ATIVAR
cd my_proj
./venv/Scripts/activate

# ambiente virtual - DESATIVAR
deactivate

# ambiente virtual - ver binarios instalados
pip freeze

# ambiente virtual - gerar um txt com todas dependencias do projeto
pip freeze > requirements.txt
python -m pip freeze > requirements.txt

# ambiente virtual - instalar dependencias apartir de um txt
pip install -r requirements.txt
python -m pip install -r requirements.txt