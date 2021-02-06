- criado com
npm init -y

- bibliotecas
npm install express --save

-- parametros fixo na rota
//http://localhost:4000/ola/Luciane/verbo
// quando tem "?" significa q o parametro nao eh obrigatorio
app.get('/ola/:nome?/:empresa?', function (req, res) { }