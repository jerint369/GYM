var express = require('express');
var router = express.Router();
const pool = require('../database');

/* post user adding */
router.post('/adduser', function(req, res) {
    console.log(req.body.data);
    const username = req.body["username"]
    const password = req.body["password"]
    console.log("Username:" + username);
    console.log("Password:" + password);

    const insertSTMT =`INSERT INTO accounts (username, password) VALUES ('${username}', '${password}');`

    pool.query(insertSTMT).then((response) =>{
    console.log("Data saved");
    console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    });

    console.log(req.body);
  res.send("Response Received: "+ req.body);
});

module.exports = router;