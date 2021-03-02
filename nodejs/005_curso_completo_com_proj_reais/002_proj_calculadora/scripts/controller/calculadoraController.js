console.log('sasa')
class CalculadoraController{

    constructor(){
        this._displayCalculadora = 0
        this._dataAtual = ''
    }

    get displayCalculadora(){
        return this._displayCalculadora
    }

    set displayCalculadora(value){
        this._displayCalculadora = value
    }


    get dataAtual(){
        return this._dataAtual
    }

    set dataAtual(value){
        this._dataAtual = value
    }
}