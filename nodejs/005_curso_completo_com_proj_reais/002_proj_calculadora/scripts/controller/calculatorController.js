console.log('CalculatorController')

class CalculatorController{

    constructor(){

        this.displayCalculatorEl = document.querySelector("#display")
        this.timeEl = document.querySelector("#hora")
        this.dateEl = document.querySelector("#data")
        this._currenteDate
        this.initialize()
    }

    initialize(){

        setInterval(()=>{
            this.displayTime = this.currenteDate.toLocaleTimeString("pt-BR")
        }, 1 * 1000)

        this.displayCalculatorEl.innerHTML = '4567'
        this.dateEl.innerHTML = '01/05/2020'

    }

    get displayTime(){
        return this.timeEl.innerHTML
    }

    set displayTime(value){
        this.timeEl.innerHTML = value
    }

    get displayDate(){
        return this.timeEl.innerHTML
    }

    set displayDate(value){
        return this.timeEl.innerHTML = value
    }


    get displayCalculator(){
        return this.displayCalculatorEl.innerHTML
    }

    set displayCalculator(value){
        this.displayCalculatorEl.innerHTML = value
    }

    get currenteDate(){
        return new Date()
    }







}

