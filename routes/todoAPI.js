let express = require('express'),
    db = require('../models');

let router = express.Router();

router.get("/todos", function(req, res){
    db.todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(error){
        console.log("Error" + error);
    })
})

module.exports = router;