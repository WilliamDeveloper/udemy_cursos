class Table{

    constructor(array){
        this.header = array[0];

        // remover a primeira linha do array
        array.shift();
        this.rows = array

    }

}

module.exports = Table