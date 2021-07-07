cd flask
docker build -t flaskcompose .

cd mysql
docker build -t mysqlcompose .


docker compose up