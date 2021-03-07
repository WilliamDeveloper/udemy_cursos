class HttpRequest{


    static request(method, url, params ={}){

        return new Promise((resolve, reject)=>{
            let ajax = new XMLHttpRequest()
            ajax.open(method.toUpperCase(),url)
            ajax.onerror = event =>{
                reject(event)
            }
            ajax.onload = event =>{

                let obj = { }

                try{
                    obj = JSON.parse(ajax.responseText)
                }catch (e) {
                    console.log(e)
                    reject(e)
                }

                resolve(obj)

            }

            ajax.send()
        })

    }


}