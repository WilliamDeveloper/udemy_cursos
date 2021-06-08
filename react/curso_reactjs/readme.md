https://pt-br.reactjs.org/

https://github.com/nvm-sh/nvm
https://nodejs.org/en/v
https://pt-br.reactjs.org/docs/getting-started.html
https://codesandbox.io/
https://code.visualstudio.com/
https://www.google.com/intl/pt-BR/chrome/
https://ohmyz.sh/

https://chocolatey.org/install
https://git-scm.com/downloads
https://gist.github.com/luizomf/88af1fde8d28b103540b74ec05224279
https://nodejs.org/en/download/
https://code.visualstudio.com/

https://git-scm.com/downloads
https://pt-br.reactjs.org/docs/create-a-new-react-app.html

nvm install 14.17.0
nvm use 14.17.0

mkdir aula01
cd aula01
npx create-react-app projeto
npx create-react-app .


https://jsonplaceholder.typicode.com/

https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh

https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

# Criar chaves ssh
ssh-keygen -t rsa -f "/c/Users/seu-usuario/.ssh/nome-chave" -C 'seu-email@email.com'

# Quando fechar o terminal preciso executar isso
eval "$(ssh-agent -s)"
ssh-add /c/Users/seu-usuario/.ssh/nome-chave

# Iniciando o git
git init
git config --global user.name "SEU NOME"
git config --global user.email "seu-email@email.com"
git remote add origin git@github.com:CAMINHO-COPIADO-DO-GITHUB-SSH

# Editei
git add .
git commit -m 'MENSAGEM'
git push origin master


npm install
npm run start
npm run test
npm run test -- --coverage