mkdir -p ./integracao-gulp/src/modelo

mkdir -p ./integracao-gulp
cd integracao-gulp
tsc --init
npm init -y


npm install --save-dev gulp
npm install --save-dev typescript
npm install --save-dev browserify
npm install --save-dev tsify
npm install --save-dev vinyl-source-stream
npm install --save-dev del

npm install --save-dev gulp-uglify
npm install --save-dev gulp-rename


npm install --save-dev jquery
npm install --save-dev @types/jquery

npm run build
typescript/aula10/package.json
{
  "name": "integracao-gulp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "gulp"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^3.3.29",
    "browserify": "^16.2.3",
    "del": "^4.0.0",
    "gulp": "^4.0.0",
    "gulp-rename": "^1.4.0",
    "gulp-uglify": "^3.0.2",
    "jquery": "^3.3.1",
    "tsify": "^4.0.1",
    "typescript": "^3.3.4000",
    "vinyl-source-stream": "^2.0.0"
  }
}

