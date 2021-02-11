class Table{

    constructor(array){
        this.header = array[0];

        // remover a primeira linha de cabecalho do array
        array.shift();
        this.rows = array
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }

}

module.exports = Table