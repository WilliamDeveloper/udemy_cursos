const express = require('express')
const app = express()
const jobRoute = require('./routes/jobRoutes')

const db = require('./db/connection')

//bodyparser -> que agora ta dentro do express
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//db connection
db.authenticate().then(()=>{
    console.log('conectou ao banco com sucesso')
})





//routes
app.get('/',(req,res)=>{
    res.send('OK')
})

app.use('/job', jobRoute)


const PORT = 3000
app.listen(PORT, ()=>{
    console.log('servidor rodando')
})

