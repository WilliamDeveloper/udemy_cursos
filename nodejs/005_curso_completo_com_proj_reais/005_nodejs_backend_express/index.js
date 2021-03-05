const http = require('express')

let server = http.createServer((req,res)=>{
    console.log('URL: ', req.url)
    console.log('METHOD: ', req.method)

    switch (req.url) {
        case '/':
            res.statusCode = 200
            res.setHeader("Content-Type", 'text/html')
            res.end('<h1> ola</h1>')
        break;

        case '/user/json':
            res.statusCode = 200
            res.setHeader("Content-Type", 'application/json')
            let user = {
                nome:'william',
                idade:18,
                admin:true
            }
            res.end(JSON.stringify(user))
        break;

    }

})

server.listen(3000,'127.0.0.1',()=>{
    console.log('servidor rodando')
})