class Filme{

    constructor(){
        this.titulos=''
        this.ano=0
        this.genero=''
        this.diretor=''
        this.atores=[]
        this.duracao=0
    }

    Reproduzir(){
        console.log('Reproduzir')
    }

    Pausar(){
        console.log('Pausar')
    }

    Avancar(){
        console.log('Avancar')
    }

    Fechar(){
        console.log('Fechar')
    }

}

var vingadores = new Filme()
var hulk = new Filme()
var starWard = new Filme()

hulk.Reproduzir()