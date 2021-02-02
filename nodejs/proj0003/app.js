const express = require('express');
const app = express();

const PORTA = 3000;

//---------------------------------------------
// Routes
//---------------------------------------------
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users', userRoute);

//---------------------------------
// mongodb
//---------------------------------
// string conexao mongo
// mongodb+srv://usuario_admin:<password>@clusterapi.yh7yq.mongodb.net/<dbname>?retryWrites=true&w=majority
const  mongoose = require('mongoose');
const bodyParser = require("body-parser");
const url = "mongodb+srv://usuario_admin:falcom@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority";
const options = {
    //reconnectTries: Number.MAX_VALUE,
    //reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(url,options);
mongoose.set("useCreateIndex",true);

mongoose.connection.on("error", (error) => {
    console.log("Erro na conexao com o banco de dados: "+error)
});


mongoose.connection.on("disconnected", () => {
    console.log("Aplicacao desconectada do banco de dados")
});

mongoose.connection.on("connected", () => {
    console.log("Aplicacao conectada do banco de dados")
});

//---------------------------------
// body-parser
//---------------------------------
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//------------------------------
// subindo api
//------------------------------
app.listen(PORTA);

module.exports = app;

// http://localhost:3000/