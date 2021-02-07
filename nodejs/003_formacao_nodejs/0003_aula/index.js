const express  = require("express")
const app = express()

app.get("/",(req,res)=>{
    console.log(' bem vindo ao site')
});

app.listen(8080,()=>{
    console.log("servidor no ar")
})