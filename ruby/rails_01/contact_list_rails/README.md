---
bootstrap

- https://github.com/twbs/bootstrap-sass

---
gem update rails

rails -v
gem install rails -v 6.1.0

---
# ver ruby gems enviromment

gem env

---

###### criando novo projeto rails
rails new app

- criar projeto com sqlite3
rails new contact_list

- criar projeto com postgresql
rails new contact_list -d postgresql

---
###### criar estrutura de banco de dados sqlite
bundle exec rails db:migrate

--- 
###### criar database
rails db:create

---
####instalar dependencias javascript
yarn install
npm install

--
# instalar todas dependencias GEM
bundle install 

---
##### rodar aplicacao rails
rails server
rails s
rails server -p 3030 -b 0.0.0.0 

# configurar para aceitar conexao externa 0.0.0.0
config\puma.rb
bind "tcp://0.0.0.0:#{ENV['PORT'] || 3000}"

---

# criando controller
rails generate controller static_pages

---
# adicionando Bootstrap no rails
- yarn add bootstrap jquery popper.js

- config\webpack\environment.js
```
...

const webpack = require('webpack')
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $:'jquery',
  jQuery:'jquery',
  Popper: ['poper.js','default']
}))

...
```


