const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{
    const token_header = req.headers.auth;

    if(!token_header) return res.send({ error:'token nao enviado!'});

    jwt.verify(token_header, 'batatafrita2019', (err, decoded) =>{
        if(err) return res.send({error: 'token invalido'});
    });
}

module.exports = auth;