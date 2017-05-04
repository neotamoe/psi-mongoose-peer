var express = require('express');
var mongoose = require('mongoose');
var Gem = require('./models/gems');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

// mongodb local, default port, name of our database
mongoose.connect('mongodb://localhost:27017/psiGemDb');

app.listen(3000, function() {
  console.log('listening on 3000!!');
});

app.get('/gems', function(req, res) {
  // select/read
  Gem.find({}, function(err, gemResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('gemResults ->', gemResults);
      res.send(gemResults);
    }
  });
});

app.post('/gems', function(req,res){
  console.log('in gems post route:', req.body);
  var newGem = new Gem ({
    name: req.body.name,
    gem: req.body.gem,
    est_value: req.body.est_value,
    rare: req.body.rare,
    date_collected: req.body.date_collected
  });
  newGem.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else{
      console.log('cool stuff!!!');
      res.sendStatus(202);
    }
  }); // end newGem save
}); // end gems POST


// SAMPLE ENTRY IN POSTMAN, SEE HOW TO ENTER DATE, USE DOUBLE QUOTES
// {
// 	"name": "amal",
// 	"gem": "diamond",
// 	"est_value": 1000000,
// 	"rare": true,
// 	"date_collected": "<2017-05-02>"
// }
