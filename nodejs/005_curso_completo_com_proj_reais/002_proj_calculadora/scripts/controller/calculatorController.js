console.log('CalculatorController')

class CalculatorController{

    constructor(){
        this._operation=[]
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

    clearAll(){
        this._operation = []
    }

    clearEntry(){
        this._operation.pop()
    }

    getLastOperation(){
        return this._operation[this._operation.length -1]
    }

    isOperator(value){
       return ['+','-','*','/','%'].indexOf(value) > -1
    }

    addOperation(value){

        let lastOperation = this.getLastOperation()

        if(window.isNaN(lastOperation)){

            if(this.isOperator(value)){
                this._operation[this._operation.length -1] = value
            }else{
               console.log(value)

            }
            // this._operation.push(value)
        }else{
            let newValue = lastOperation.toString()+value
            this._operation.push(newValue)
        }





        console.log(this._operation)
    }

    setError(){
        this.displayCalculator = "Error"
    }

    execBtn(value){
        switch (value) {
            case 'ac':
                this.clearAll()
                break;
            case 'ce':
                this.clearEntry()
                break;
            case 'soma':
                this.addOperation("+")
                break;
            case 'subtracao':
                this.addOperation("-")
                break;
            case 'divisao':
                this.addOperation("/")
                break;
            case 'multiplicacao':
                this.addOperation("*")
                break;
            case 'porcento':
                this.addOperation("%")
                break;
            case 'igual':
                this.addOperation("=")
                break;
            case 'ponto':
                this.addOperation(".")
                break;

            case "0":
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break;

            default:
                this.setError()
                break
        }

    }


    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")
        console.log(buttons)

        buttons.forEach( (btn, index) => {
            this.addEventListenerAll(btn,"click drag", event=>{
                let textBtn = btn.className.baseVal.replace("btn-","")
                console.log(textBtn)
                this.execBtn(textBtn)
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

