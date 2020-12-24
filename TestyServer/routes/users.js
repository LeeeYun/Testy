var pool = require('../utils/dbconnection');
var express = require('express');
var router = express.Router();

router.post('/userList/', function(req, res, next) {
    // var artist_id = req.body.artist_id;
  
    var query = " SELECT * FROM test.user "
    ;
  
    pool
    .query(query)
    .then(results => {
    //   var row= results[0];
      console.log(results)
    //   res.json(results);
    })
    .catch(err => {
      console.error(err);
    }) 
  });

  module.exports = router;