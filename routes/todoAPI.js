let express = require('express'),
    db = require('../models');

let router = express.Router();

router.get("/", function(req, res){
    db.todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(error){
        console.log("Error" + error);
    })
})

router.post("/", function(req, res){
    res.send("POST ROUTE");
})

module.exports = router;