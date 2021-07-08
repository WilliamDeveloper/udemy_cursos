docker build -t williampacheco/flask-kub-projeto .
docker run -d -p 5000:5000 --name flask-kub --rm  williampacheco/flask-kub-projeto
docker login
docker push williampacheco/flask-kub-projeto


kubectl create deployment flask-deployment --image=williampacheco/flask-kub-projeto

kubectl get deployments
kubectl describe deployments

kubectl get pods
kubectl describe pods

kubectl config view

kubectl expose deployment flask-deployment --type=LoadBalancer --port=5000

minikube service flask-deployment