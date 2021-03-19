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
                        this.total = results[1][0].found_rows
                        console.log('this.total-----', this.total, this.itensPerPage, results[0], results[1],results[1][0])
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

    getTotalPages(){
        return this.totalPages
    }

    getNavigation(params){
        console.log('getNavigation ', params)
        let limitPagesNav = 5
        let links = []
        let nrstart = 0
        let nrend = 0

        if(this.getTotalPages() < limitPagesNav ){
            limitPagesNav = this.getTotalPages()
        }


        if( (this.getCurrentPage() - parseInt(limitPagesNav/2)) < 1 ){
            console.log('if-1')
            // se estamos nas primeiras paginas
            nrstart = 1
            nrend = limitPagesNav


        }else if((this.getCurrentPage() + parseInt(limitPagesNav/2)) > this.getTotalPages() ){
            console.log('if-2')
            // estamos xegando nas uiltimas paginas
            nrstart = this.getTotalPages() - limitPagesNav
            nrend = this.getTotalPages()

        }else{
            console.log('if-3')
            // estou no meio da navegacao
            nrstart = this.getCurrentPage() - parseInt(limitPagesNav/2)
            nrend = this.getCurrentPage() + parseInt(limitPagesNav/2)
        }

        console.log('start', nrstart, nrend, limitPagesNav)


        if(this.getCurrentPage() > 1){
            links.push({
                text: '<',
                href : '?'+ this.getQueryString(Object.assign({},params,{page: this.getCurrentPage()-1})),
                // active : (x === this.getCurrentPage())
            })
        }
        
        for (let x = nrstart; x <= nrend ; x++){
            console.log('ta passando ', x)
            links.push({
                text: x,
                href : '?'+ this.getQueryString(Object.assign({},params,{page: x})),
                active : (x === this.getCurrentPage())
            })
        }

        console.log('this.getCurrentPage()', this.getCurrentPage(),this.getTotalPages())

        if(this.getCurrentPage() < this.getTotalPages()){
            links.push({
                text: '>',
                href : '?'+ this.getQueryString(Object.assign({},params,{page: this.getCurrentPage()+1})),
                // active : (x === this.getCurrentPage())
            })
        }

        // console.log('links', links)

        return links

    }

    getQueryString(params){
        let queryString =[]

        for(let name in params){
            queryString.push(`${name}=${params[name]}`)
        }

        return queryString.join('&')
    }
}

module.exports=Pagination