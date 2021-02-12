const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const msgCodeHttp ={
    200:'200 - requisicao efetuada com sucesso',
    400:'400 - requisicao invalida',
    404:'404 - recurso nao encontrado',
    401:'401 - credenciais invalidas',
}

let DB={
    games:[
        {id:1, title:'Mario', year:2010, price: 215.5},
        {id:2, title:'Yoshi', year:2011, price: 214.5},
        {id:3, title:'MK3', year:2012, price: 213.5},
        {id:4, title:'Donkey', year:2013, price: 212.5},
        {id:5, title:'Kong', year:2014, price: 211.5},
    ],
    users:[
        {id:1,name:'william1', email:'a@a.com.br',password:'123456'},
        {id:2,name:'william2', email:'b@a.com.br',password:'123456'},
        {id:3,name:'william3', email:'c@a.com.br',password:'123456'},
        {id:4,name:'william4', email:'d@a.com.br',password:'123456'},
        {id:5,name:'william5', email:'e@a.com.br',password:'123456'},
    ]
}

app.get('/games',(req,res)=>{
    res.statusCode=200
    res.json(DB.games)
})

app.get('/game/:id',(req,res)=>{
    let id = req.params.id
    if(isNaN(id)){
        res.statusCode=400
        res.json({msg: msgCodeHttp["400"] })
    }else{
        id=parseInt(id)
        let game = DB.games.find(game => game.id == id)

        if(game != undefined){
            res.statusCode=200
            res.json(game)
        }else{
            res.statusCode=404
            res.json({msg: msgCodeHttp["404"] })
        }
    }
})


app.post('/game',(req,res)=>{
    console.log("body: ",req.body.title)
    console.log("body: ",req.body)
    let {title, price, year} = req.body
    console.log('#=>', title, price, year)

    DB.games.push({
        id:DB.games.length+1,
        title,
        price,
        year
    })

    res.statusCode=200
    res.json(DB.games)
})

app.delete('/game/:id',(req,res)=>{
    console.log("body: ",req.body.title)
    console.log("body: ",req.body)
    let id = req.params.id
    if(isNaN(id)){
        res.statusCode=400
        res.json({msg: msgCodeHttp["400"] })
    }else{
        id=parseInt(id)
        let index = DB.games.findIndex(game => game.id == id)

        if(index == -1){
            res.statusCode=404
            res.json({msg: msgCodeHttp["404"] })
        }else{
            DB.games.splice(index,1)
            res.statusCode=200
            res.json(DB.games)
        }
    }
})

app.put('/game/:id',(req,res)=>{
    let id = req.params.id
    if(isNaN(id)){
        res.statusCode=400
        res.json({msg: msgCodeHttp["400"] })
    }else{
        id=parseInt(id)
        let game = DB.games.find(game => game.id == id)

        if(game != undefined){
            let {title, price, year} = req.body

            if(title != undefined){
                game.title = title
            }

            if(price != undefined){
                game.price = price
            }

            if(year != undefined){
                game.year = year
            }


            res.statusCode=200
            res.json(DB.games)
        }else{
            res.statusCode=404
            res.json({msg: msgCodeHttp["404"] })
        }
    }
})

app.post('/auth',(req, res)=>{
    let {email, password} = req.body

    if(email != undefined){
        let user = DB.users.find(user=> user.email == email)

        if(user != undefined){

            if(user.password == password){
                res.statusCode=200
                res.json({token: "token" })
            }else{
                res.statusCode=401
                res.json({msg: msgCodeHttp["401"] })
            }

        }else{
            res.statusCode=404
            res.json({msg: msgCodeHttp["404"] })
        }

    }else{
        res.statusCode=400
        res.json({msg: msgCodeHttp["400"] })
    }
})

app.listen(3000,()=>{
    console.log('API RODANDO http://localhost:3000/games')
})

