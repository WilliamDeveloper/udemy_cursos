const TestController ={
    helloWorld(req, res){
        let msg = process.env.HELLO_WORLD || 'variavel HELLO_WORLD nao definida'
        res.send(msg)
    }
}

module.exports = TestController