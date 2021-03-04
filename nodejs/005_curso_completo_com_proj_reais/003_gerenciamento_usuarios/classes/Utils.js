class Utils{
    static dateFormate(date){
        let value = ''
            + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
            + ' '
            + date.getHours() + ":" + (date.getMinutes()+1) + ":" + date.getSeconds()
        // console.log(value)
        return value
    }
}