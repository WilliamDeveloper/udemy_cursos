docker build -t williampacheco/flask-kub-projeto .
docker run -d -p 5000:5000 --name flask-kub --rm  williampacheco/flask-kub-projeto
docker login
docker push williampacheco/flask-kub-projeto


kubectl create deployment flask-deployment --image=williampacheco/flask-kub-projeto