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

/*
<p>
    <button>
</p>
* */
btn.addEventListener("click",function (event) {
    // quando 2 elementos ocupam mesmo espaço o evento dos dois sao acionados
    // senao usar o comando abaixo
    e.stopPropagation()

})

btn.addEventListener("click",function (event) {
    // previnir uma acao default de um submit por exemplo
    e.preventDefault()

})

window.addEventListener("keydown", function (event) {
    console.log('event.key ',event.key)

    if(event.key == 'q'){
        console.log('apertou letra q')
    }

})

window.addEventListener("keyup", function (event) {
    console.log('event.key ',event.key)

    if(event.key == 'q'){
        console.log('soltou letra q')
    }

})

window.addEventListener("mousemove", function (event) {
    console.log(event.x)
    console.log(event.y)
})


window.addEventListener("scroll", function (event) {
    console.log('event.key ',event.key)

    if(window.pageYOffset > 100){
        console.log('xegou na posicao')
    }
})

//..........
input.addEventListener("focus",function () {
    console.log("foco no input")
})

input.addEventListener("blur",function () {
    console.log("perdeu o foco")
})


window.addEventListener("load", function (event) {
    console.log('acabou de ser carregada')

})


window.addEventListener("beforeunload", function (event) {
    console.log('esta saindo ou fechando da pagina')

})
