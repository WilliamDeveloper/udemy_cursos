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