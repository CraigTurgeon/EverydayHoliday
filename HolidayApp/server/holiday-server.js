// EXPRESS SERVER
var express = require('express');
var router = express.Router();
var http = require('http');
var pg = require('pg');
var conString = "postgres://@localhost/HolidayzDB";

const PORT=8080;

function handleRequest(req, res) {
  res.end('Connected to postgres server');
}

var server = http.createServer(handleRequest);



router.get('/holidays', function(req, res, next){
    pg.connect(conString, function(err, client, done){
    if (err) {
      console.error(err)
    }
    client.query('SELECT * FROM holidays', function(err, result){
      done();
      console.log(result.rows);
      return result.rows;
      // res.json(result.rows);
    })
})
})


server.listen(PORT, function(){
  console.log('listening on port: ' + PORT)
})      

