console.log('CalculatorController')

class CalculatorController{

    constructor(){

        this._lastOperator = ''
        this._lastNumber = ''

        this._operation=[]
        this._locale = 'pt-BR'
        this.displayCalculatorEl = document.querySelector("#display")
        this.timeEl = document.querySelector("#hora")
        this.dateEl = document.querySelector("#data")
        this._currenteDate
        this.initialize()
        this.initButtonsEvents()
        this.initKeyBoard()
    }

    initialize(){

        setInterval(()=>{
           this.setDisplayDateTime()
        }, 0 * 1000)

        this.setLastNumberToDisplay()


    }

    initKeyBoard(){

    }

    addEventListenerAll(element, events, fn){
        events.split(" ").forEach(event =>{
            element.addEventListener(event, fn, false)//false para nao dar propagation
        })
    }

    clearAll(){
        this._operation = []
        this._lastOperator = ''
        this._lastNumber = ''

        console.log(this._operation)

        this.setLastNumberToDisplay()
    }

    clearEntry(){
        this._operation.pop()
        console.log(this._operation)

        this.setLastNumberToDisplay()
    }

    getLastOperation(){
        return this._operation[this._operation.length -1]
    }

    setLastOperation(value){
        this._operation[this._operation.length -1] = value
    }

    isOperator(value){
       return ['+','-','*','/','%'].indexOf(value) > -1
    }

    getResult(){
        console.log('getResult ', this._operation)
        return eval(this._operation.join(""))
    }

    calculate(){
        let last = '';

        this._lastOperator = this.getLastItem(true)

        if(this._operation.length < 3){
            console.log('<3 ', this._lastNumber, this._lastOperator)
            let firstItem = this._operation[0]
            this._operation = [firstItem, this._lastOperator, this._lastNumber]
        }

        if(this._operation.length > 3){
            last = this._operation.pop()

            this._lastNumber = this.getResult()
        }else if(this._operation.length == 3){

            this._lastNumber = this.getLastItem(false)
        }

        let result = this.getResult()

        if(last == '%'){

            result = result / 100
            this._operation= [result]

        }else{
            this._operation= [result]

            if(last){
                this._operation.push(last)
            }
        }



        this.setLastNumberToDisplay()
    }

    getLastItem(isOperator = true){
        let lastItem;

        for (let i = this._operation.length - 1; i >=0 ; i--) {
            if(this.isOperator(this._operation[i]) == isOperator){
                lastItem = this._operation[i]
                break
            }
        }

        if(!lastItem){
            lastItem = (isOperator) ? this._lastOperator : this._lastNumber
        }

        return lastItem

    }

    setLastNumberToDisplay(){
        let lastNumber = this.getLastItem(false);

        if(!lastNumber){
            lastNumber = 0
        }
        this.displayCalculator = lastNumber
    }

    pushOperation(value){
        this._operation.push(value)

        if(this._operation.length > 3){
            this.calculate()
        }
    }

    addOperation(value){
        console.log(value)

        let lastOperation = this.getLastOperation()

        if(window.isNaN(lastOperation)){

            if(this.isOperator(value)){
                this.setLastOperation( value)
            }else{
               console.log(value)
               this.pushOperation(value)
                this.setLastNumberToDisplay()
            }

        }else{

            if(this.isOperator(value)){
                this.pushOperation(value)
            }else{
                let newValue = lastOperation.toString()+value
                this.setLastOperation(newValue)
                this.setLastNumberToDisplay()
            }

        }

        console.log(this._operation)
    }

    setError(){
        this.displayCalculator = "Error"
    }

    addDot(){
        let lastOperation = this.getLastOperation()

        if(typeof lastOperation === 'string' && lastOperation.split("").indexOf(".") > -1) return

        if(this.isOperator(lastOperation) || !lastOperation){
            this.pushOperation("0.")
        }else{
            this.setLastOperation(lastOperation.toString() +'.')
        }

        this.setLastNumberToDisplay()
        console.log(lastOperation)
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
                this.calculate()
                break;
            case 'ponto':
                this.addDot()
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

