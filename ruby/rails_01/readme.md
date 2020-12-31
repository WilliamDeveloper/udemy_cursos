---
rbenv
- https://gist.github.com/nak1114/7ea63204203883c5884d
- https://github.com/nak1114/rbenv-win

---
rbenv rehash

---
git config --global color.ui true
git config --global user.name "William Pacheco"
git config --global user.email "gtaskwill@gmail.com"
--
ssh-keygen -t rsa -b 4096 -C "gtaskwill@gmail.com"

cat ~/.ssh/id_rsa.pub

----

gem install rails -v 5.0.0.rc2
gem update rails
gem install rails --version=4.0
gem install rails --version=5.2.4.4
gem update rails --version=5.2.4.4

gem update rails

rails -v
gem install rails -v 6.1.0

---

sudo -u postgres createuser bruno -s

---

###### criando novo projeto rails
rails new app

---
bundle update
bundle install
gem 'sqlite3', '~> 1.3.6', '< 1.4'

---
# ver ruby gems enviromment

gem env

---
###### criar estrutura de banco de dados sqlite
bundle exec rails db:migrate

---
####instalar dependencias javascript
yarn install
npm install

---
##### rodar aplicacao rails
rails s

