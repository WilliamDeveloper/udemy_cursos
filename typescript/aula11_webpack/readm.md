mkdir -p ./integracao-webpack/src/modelo

mkdir -p ./integracao-webpack
cd integracao-webpack
tsc --init
npm init -y


npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev typescript
npm install --save-dev ts-loader

npm install --save-dev copy-webpack-plugin

npm install --save-dev jquery
npm install --save-dev @types/jquery

npm run build
typescript/aula11/package.json
{
  "name": "integracao-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^3.3.29",
    "copy-webpack-plugin": "^5.0.2",
    "jquery": "^3.3.1",
    "ts-loader": "^5.3.3",
    "typescript": "^3.3.4000",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1"
  }
}


