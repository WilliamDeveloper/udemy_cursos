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

// string conexao mongo
// mongodb+srv://usuario_admin:<password>@clusterapi.yh7yq.mongodb.net/<dbname>?retryWrites=true&w=majority


app.listen(PORTA);

module.exports = app;

// http://localhost:3000/