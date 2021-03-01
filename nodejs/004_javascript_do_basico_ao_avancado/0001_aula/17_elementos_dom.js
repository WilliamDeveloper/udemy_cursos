console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[0].childNodes[0])
console.log(document.body.childNodes[0].childNodes[0].innerText)

console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByClassName("h1"))
console.log(document.getElementsByName("h1"))
console.log(document.getElementById("h1"))
console.log(document.querySelector("h1"))
console.log(document.querySelector("#id"))
console.log(document.querySelector(".classe"))

let elemento = document.createElement('p')
let texto = document.createTextNode("algum text")
elemento.appendChild(texto)


let h1 = document.getElementById("h1")
let paiDoH1 = document.getElementById("h1").parentNode

let a = document.querySelector("a")
console.log(a.getAttribute("href"))

let url = 'https://www.horadecodar.com.br'
a.setAttribute("href", url)
console.log(a.getAttribute("href"))

let h1 = document.getElementById("h1")
//considera as bordas
console.log(h1.offsetHeight)
console.log(h1.offsetWidth)

//nao considera as bordas
console.log(h1.clientHeight)
console.log(h1.clientWidth)