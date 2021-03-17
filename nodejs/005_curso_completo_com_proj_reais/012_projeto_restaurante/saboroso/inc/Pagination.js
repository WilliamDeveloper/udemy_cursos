let conn =require('./db-mysql')

class Pagination{
    constructor(query,
                params =[],
                itensPerPage = 10
    ){
        this.query = [query,'select found_rows() as found_rows'].join(';')
        this.params = params
        this.itensPerPage = itensPerPage
        this.currentPage = 1

    }

    getPage(numPage){
        this.currentPage = numPage - 1
        this.params.push(
            this.currentPage * this.itensPerPage,
            this.itensPerPage
        )
        return new Promise((resolve, reject)=>{
            conn.query(
                this.query,
                this.params,
                (error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        this.data = results[0]
                        this.total = results[1][0].FOUND_ROWS
                        this.totalPages =  Math.ceil(this.total / this.itensPerPage)
                        this.currentPage++
                        resolve(this.data)
                    }
                })
        })
    }

    getTotal(){
        return this.total
    }

    getCurrentPage(){
        return this.currentPage
    }

    getTotalPage(){
        return this.totalPages
    }
}

module.exports=Pagination