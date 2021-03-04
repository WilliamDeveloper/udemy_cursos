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