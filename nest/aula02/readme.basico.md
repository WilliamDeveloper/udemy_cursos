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

npm install typeorm --save



https://github.com/argentinaluiz/imersao-fullcycle-3/blob/main/store-api/.env
npm run typeorm
npm run typeorm migrations:create -- -n create-products-table