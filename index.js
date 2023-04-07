var express = require('express');
var cors = require('cors');
//Using multer package to upload files
const multer = require('multer');
const upload = multer({dest: './public/data/'});
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'),function(req,res){
  //Using req.file to access uploaded 'upfile' from the Request body
  //Passing an object with values into Response object
res.json({name:req.file.originalname,type:req.file.mimetype,size:req.file.size})
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
