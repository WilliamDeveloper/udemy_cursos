export class Format{

    static  getCamelCase(text){
        let div = document.createElement('div')
        div.innerHTML = `<div data-${text}="id"></div>`

        return Object.keys(div.firstChild.dataset)[0]
    }

    static toTime(duration){
        let seconds = parseInt((duration / (1000)) % 60  )
        let minutes = parseInt((duration / (1000 * 60)) % 60  )
        let hours = parseInt((duration / (1000 * 60 * 60)) % 24  )

        // console.log(duration, hours, minutes,seconds)

        // return '0'
        let result
        if(hours > 0){
            result= `${hours}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
        }else{
            result= `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
        }
        // console.log(result)
        return result
    }

    static timeStampToTime(timeStamp){

    }
}