console.log('CalculatorController')

class CalculatorController{

    constructor(){
        this._displayCalculator = 0
        this._currenteDate = ''
        this.initialize()
    }

    initialize(){

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