npm install -g bower
bower install

npm install

npm install express-generator
express --ejs app

- habilitar manipulacao de form
npm install --save formidable


//deixar publico no firebase-storage
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}