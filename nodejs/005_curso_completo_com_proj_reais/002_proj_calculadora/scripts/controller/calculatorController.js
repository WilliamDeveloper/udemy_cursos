console.log('CalculatorController')

class CalculatorController{

    constructor(){

        this.displayCalculatorEl = document.querySelector("#display")
        this.dateEl = document.querySelector("#data")
        this.timeEl = document.querySelector("#hora")

        this._currenteDate = ''
        this.initialize()
    }

    initialize(){
        displayCalculatorEl.innerHTML = '4567'
        dateEl.innerHTML = '01/05/2020'
        timeEl.innerHTML = '20:30'
    }

    get displayCalculator(){
        return this.displayCalculatorEl.innerHTML
    }

    set displayCalculator(value){
        this.displayCalculatorEl.innerHTML = value
    }


    get currenteDate(){
        return this._currenteDate
    }

    set currenteDate(value){
        this._currenteDate = value
    }

}

