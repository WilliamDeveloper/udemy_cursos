let conn =require('./db-mysql')

module.exports ={

    getMenus(){
        return new Promise( (resolve, reject)=>{
            conn.query(
                `
                    select * from tb_menus order by title
                `,
                (error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(results)
                    }
                })
        })
    }
}