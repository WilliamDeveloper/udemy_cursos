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
const url = "mongodb+srv://usuario_admin:falcom@clusterapi.yh7yq.mongodb.net/data_base_name?retryWrites=true&w=majority"

app.listen(PORTA);

module.exports = app;

// http://localhost:3000/