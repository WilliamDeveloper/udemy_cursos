npx nest

npm install -g @nestjs/cli
npx nest -new nest-api

cd nest-api
npm run start

http://localhost:3000

npm run start:dev


#docker build
#docker run
docker-compose up

docker-compose exec app node -v
docker-compose exec app bash

nest generate controller product
nest generate service product
nest generate resource