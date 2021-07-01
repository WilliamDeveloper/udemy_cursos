npm install -g @nestjs/cli
npm install --save uuid
npm install --save mongoose
npm install --save @nestjs/mongoose
npm install --save class-validator
npm install --save class-transformer


npm install --save-dev @types/mongoose

nest generate module jogadores
nest generate controller jogadores
nest generate service jogadores

npm run start:dev


https://cloud.mongodb.com/v2/60cbdfc6d8a5e4665e4bcb3d#clusters

- criar cluster
- connect > 
    - add current ip adrress (security) - network access
        0.0.0.0/0
    - create mongoDB user -  (security) - database access
        admin_mongo
        BNnz295Wk3gDLhU
        
    - connection method >
        - connect your application
        
mongodb+srv://admin_mongo:<password>@cluster0.dwwu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongodb+srv://admin_mongo:BNnz295Wk3gDLhU@cluster0.dwwu8.mongodb.net/teste?retryWrites=true&w=majority
mongodb+srv://admin_mongo:BNnz295Wk3gDLhU@cluster0.dwwu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

        

https://docs.nestjs.com/techniques/validation#learn-more