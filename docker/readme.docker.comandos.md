# repositorio oficial onde fica as imagem do docker
https://hub.docker.com


# RUN - CRIAR e RODA um novo container
docker run ubuntu
docker run -it ubuntu (modo interativo)
docker run -it node
docker run nginx
docker run -d nginx (roda container em background detached)
docker run -d -p 8080:80 nginx
docker run -d -p 8080:80  --name nginx_app nginx
docker run -d -p 8080:80 --name meu_apache httpd    

# LISTAR - verificar se tem container docker rodando ou que ja rodaram
docker ps
docker container ps
docker container ls

docker container ps -a
docker container ls -a

# STOP - container <id ou nome>
docker container stop silly_germain

# START - container <id ou nome>
docker container start silly_germain

# LOGS 
docker container logs nginx_app
docker container logs -f nginx_app

# DELETANDO CONTAINER
docker container rm silly_germain
docker container rm silly_germain -f


