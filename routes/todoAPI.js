let express = require('express'),
    db = require('../models');

let router = express.Router();

router.get("/", function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(error){
        console.log("Error" + error);
    })
})

router.post("/", function(req, res){
    db.Todo.create(req.body)
    .then(function(todo){
        res.status(201).json(todo);
    })
    .catch(function(error){
        console.log(error);
    })
})

module.exports = router;