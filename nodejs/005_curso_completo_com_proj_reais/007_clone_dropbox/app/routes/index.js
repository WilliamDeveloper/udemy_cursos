var express = require('express');
var router = express.Router();
var formidable = require('formidable')
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', function(req, res, next) {

  let path = './'+req.query.path

  if (fs.existsSync(path)){
    fs.readFile(path, (error,data)=>{
      if(error){
        console.log(error)
        res.status(400).json({error})
      }else{
        res.status(200).end(data)
      }
    })
  }else{
    res.status(404).json({error:'file not found'})
  }

})

router.delete('/file', function(req, res, next) {

  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions:true
  })

  form.parse(req,(error, fields, files)=>{

    console.log('fields ', fields, 'files ', files)

    let path = "./"+fields.path
    console.log("delete-path ",path)
    if(fs.existsSync(path)){

      fs.unlink(path, error=>{

        if(error){
          console.log('error: ', error)
          res.status(400).json({error})
        }else{
          console.log('oi')
        }

      })
    }else{
      //se der erro aki comente
      // res.status(404).json({error:'file not found'})
    }

    res.json({fields: fields})

  })



});

router.post('/upload', function(req, res, next) {
  console.log(req.body);

  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions:true
  })

  form.parse(req,(error, fields, files)=>{
      res.json({
        files : files
      })
  })


});

module.exports = router;
