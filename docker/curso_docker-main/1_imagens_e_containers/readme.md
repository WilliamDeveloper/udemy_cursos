docker build .
docker image ls
docker run -d -p 3000:3000 --name meu_nome 6d0e58609af3
docker run -d -p 3000:3000 --name meu_nome c21346d9090b
docker run -d -p 3001:3000 --name joedes_container c21346d9090b

http://localhost:3000

