let btn = document.querySelector("#btn")

// atrelando um handler(tratamento de evento) ao evento click
function msg () {
    console.log("clicou")
}

btn.addEventListener("click",msg)


setTimeout(function () {
    console.log('removendo listener de evento do botao')
    btn.removeEventListener("click",msg )
},10*1000)