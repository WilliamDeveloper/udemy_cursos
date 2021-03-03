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

        setInterval(()=>{
           this.setDisplayDateTime()
        }, 0 * 1000)

        this.displayCalculatorEl.innerHTML = '0'

        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn){
        events.split(" ").forEach(event =>{
            element.addEventListener(event, fn, false)//false para nao dar propagation
        })
    }


    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")
        console.log(buttons)

        buttons.forEach( (btn, index) => {
            this.addEventListenerAll(btn,"click drag", event=>{
                let nameKey = btn.className.baseVal.replace("btn-","")
                console.log(nameKey)
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown",event=>{
                btn.style.cursor = "pointer"
            } )
        })
    }

    setDisplayDateTime(){
        this.displayDate = this.currenteDate.toLocaleDateString(this._locale,{
            day:'2-digit',
            month:'long', // month:'short',
            year:'numeric' // year:'2-digit'
        })
        this.displayTime = this.currenteDate.toLocaleTimeString(this._locale)
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

