const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{
    const token_header = req.headers.auth;

    if(!token_header) return res.status(401).send({ error:'token nao enviado!'});

    jwt.verify(token_header, 'batatafrita2019', (err, decoded) =>{
        if(err) return res.status(401).send({error: 'token invalido'});
        res.locals.auth_data = decoded;
        return next();
    });
}

module.exports = auth;