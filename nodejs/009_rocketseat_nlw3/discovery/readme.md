#--------------------------------------------------------------
# visualizar projeto
#--------------------------------------------------------------
1) baixe o projeto "https://github.com/WilliamDeveloper/nlw3_trilha_discovery.git"
2) copie o conteudo da branche para uma pasta em "c:/nlw/"
3) abra o terminal do git-bash
4) cd /c/nlw
5) crie os dados do sqlite
    node src/database/test_criar_banco.js 
6) inicie o projeto
    npm start
7) abre o browser na url "http://127.0.0.1:5500/"


#--------------------------------------------------------------
# ajustes extras feitos apos concluir o projeto
#--------------------------------------------------------------
foi adicionado um componente de select com estados na pagina inicial
com a ideia de selecionar o estado e persistir no banco depois
mas devido a indisponibilidade de tempo deixo apenas 
como exemplo para quem quiser implementar

foi adicionado a funcionalidade do "partials" no "hbs" 
para compor pagina hbs com pedaços de outras paginas 
e poder reutilizar componentes


























#--------------------------------------------------------------
# PASSOS USADOS
#--------------------------------------------------------------

#--------------------------------------------------------------
# start projeto nodejs
#--------------------------------------------------------------
cd /c/nlw
mkdir -p /c/nlw/src
touch /c/nlw/src/server.js
touch /c/nlw/readme.md
$ npn init -y

#--------------------------------------------------------------
# dependencias
#--------------------------------------------------------------
#dependencia de webservice rotas
npm install express

#dependencia que da restart no servidor quando o arquivo se altera
npm install nodemon

# dependencia para tranformar a pagina em algo tipo jsp https://handlebarsjs.com/
npm install hbs

# sqlite
npm install sqlite-async

#--------------------------------------------------------------
# package.json
#--------------------------------------------------------------
{
  "name": "nlw",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "hbs": "^4.1.1",
    "nodemon": "^2.0.5"
  }
}

#--------------------------------------------------------------
# teste com dados fake sqlite (ira criar database.sqlite com dados)
#--------------------------------------------------------------
node src/database/test_criar_banco.js 
node src/database/test_ver_dados.js 