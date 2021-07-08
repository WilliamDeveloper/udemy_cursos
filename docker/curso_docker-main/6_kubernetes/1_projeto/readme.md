docker build -t williampacheco/flask-kub-projeto .
docker run -d -p 5000:5000 --name flask-kub --rm  williampacheco/flask-kub-projeto
docker login
docker push williampacheco/flask-kub-projeto

# configuracao kubernates
kubectl config view

# criando um deploymennnt
kubectl create deployment flask-deployment --image=williampacheco/flask-kub-projeto
kubectl get deployments
kubectl describe deployments

# onde o container ta rodando(todo deployment gera pod)
kubectl get pods
kubectl describe pods

# criando servico (expor container para mundo externo)
kubectl expose deployment flask-deployment --type=LoadBalancer --port=5000
kubectl get services
kubectl describe services/flask-deployment

minikube service flask-deployment