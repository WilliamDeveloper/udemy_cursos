gem update rails

rails -v
gem install rails -v 6.1.0
gem list | grep rails


- instalar gems
bundle install

- install javascripts
yarn install

- subir server rails
rails server

- ver rotas da aplicacao
rails routes

###### acesso ao console com todas classes do projeto
rails console

###### aplicar migracao no banco de dados
rails db:migrate

###### criar o crud completo
rails generate scaffold Contact name:string phone:string

###### criar o model
rails generate model User email:string name:string password_digest:string

###### criar controller
rails generate controller Users



