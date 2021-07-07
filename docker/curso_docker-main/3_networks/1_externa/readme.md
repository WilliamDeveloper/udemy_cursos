docker build -t flaskexterno .
docker run -d -p 5000:5000 --name flaskexterno_container --rm -v pwd:/var/www/html/ flaskexterno