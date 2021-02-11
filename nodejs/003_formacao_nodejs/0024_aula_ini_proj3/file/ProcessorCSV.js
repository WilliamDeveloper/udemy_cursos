class ProcessorCSV{

    static Process(data, sepLineBreak=undefined,sepColumn=undefined, debug=undefined ){
        if(debug) console.log(data)

        if(!sepLineBreak){
            if(data.indexOf('\r\n') !== -1 ){
                sepLineBreak='\r\n'
            }else{
                sepLineBreak='\n'
            }
        }

        if(!sepColumn){
            sepColumn=';'
        }

        let lines = data.split(sepLineBreak)

        let rows = [];

        lines.forEach( row => {
            let columns = row.split(sepColumn)
            rows.push(columns)
        })

        if(debug) console.log(rows)
    }
}

module.exports = ProcessorCSV