var express = require('express');
var router = express.Router();
var formidable = require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
