
npm install -g bower
bower install


#criar um projeto com ejs pelo express-generator
npm install -g express-generator
express --ejs frontend_express_ejs




####################################

https://github.com/hcodebr/curso-javascript-projeto-usuarios

window

window.document
document

// para ver como objeto ao inves de tag
dir(document.getElementsByTagName('div')[0])
document.getElementsByTagName('div')[0]

https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2

```
new Promise((resolve, reject)=>{ reject()})
.then(a=>{console.log(a);return 1})
.then(a=>{console.log(a);return 2})
.catch(e=>{console.log(e);return 3})
.then(a=>{console.log(a);return 4})
.then(a=>{console.log(a);return 5})
.catch(e=>{console.log(e);return 6})
.then(a=>{console.log(a);return 7})
```


// 31/12/2018 (o numero do mes começa em zero)
new Date(2018, 11, 31)

// 31/12/2018 (o numero do mes começa em 1)
new Date([2018, 12, 31])

// senao informar as horas o dia q aparece depende do locale
new Date("2018-01-01")

// senao informar as horas o dia q aparece depende do locale
new Date("2018-01-01 00:00:00")


https://momentjs.com

//serializando objeto
tr.dataset.user = JSON.stringify(dataUser)

//des-serializando um objeto
let user = JSON.parse(tr.dataset.user)
console.log(tr.dataset.user)

//gabarito original
Você pode acessar o código final deste projeto no GitHub da Hcode: 
https://github.com/hcodebr/curso-javascript-projeto-usuarios-final