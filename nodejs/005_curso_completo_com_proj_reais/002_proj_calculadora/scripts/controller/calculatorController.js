console.log('CalculatorController')

class CalculatorController{

    constructor(){
        this._displayCalculator = 0
        this._currenteDate = ''
        this.initialize()
    }

    initialize(){
        let displayCalculatorEl = document.querySelector("#display")
        let dateEl = document.querySelector("#data")
        let timeEl = document.querySelector("#hora")

        displayCalculatorEl.innerHTML = '4567'
    }

    get displayCalculator(){
        return this._displayCalculator
    }

    set displayCalculator(value){
        this._displayCalculator = value
    }


    get currenteDate(){
        return this._currenteDate
    }

    set currenteDate(value){
        this._currenteDate = value
    }

}

let calculadora = new CalculatorController()