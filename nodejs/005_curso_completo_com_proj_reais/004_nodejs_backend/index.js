const http = require('http')

let server = http.createServer((req,res)=>{
    console.log('URL: ', req.url)
    console.log('METHOD: ', req.method)

    switch (req.url) {
        case '/':
            res.statusCode = 200
            res.setHeader("Content-Type", 'text/html')
            res.end('<h1> ola</h1>')
        break;

        case '/users/json':
            res.statusCode = 200
            res.setHeader("Content-Type", 'application/json')
            res.end(JSON.stringify({
                nome:'william',
                idade:18,
                admin:true
            }))
        break;

    }

})

server.listen(3000,'127.0.0.1',()=>{
    console.log('servidor rodando')
})