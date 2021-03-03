console.log('CalculatorController')

class CalculatorController{

    constructor(){
        this._locale = 'pt-BR'
        this.displayCalculatorEl = document.querySelector("#display")
        this.timeEl = document.querySelector("#hora")
        this.dateEl = document.querySelector("#data")
        this._currenteDate
        this.initialize()
    }

    initialize(){

        let intervalId1 = setInterval(()=>{
            this.displayTime = this.currenteDate.toLocaleTimeString(this._locale)
        }, 1 * 1000)

        setTimeout(()=>{ clearInterval(intervalId1)}, 10*1000)

        let intervalId2 = setInterval(()=>{
            this.displayDate = this.currenteDate.toLocaleDateString(this._locale)
        }, 1 * 1000)

        setTimeout(()=>{ clearInterval(intervalId2)}, 10*1000)

        this.displayCalculatorEl.innerHTML = '0'


    }

    get displayTime(){
        return this.timeEl.innerHTML
    }

    set displayTime(value){
        this.timeEl.innerHTML = value
    }

    get displayDate(){
        return this.dateEl.innerHTML
    }

    set displayDate(value){
        this.dateEl.innerHTML = value
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

