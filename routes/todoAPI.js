let express = require('express'),
    db = require('../models');

let router = express.Router();

router.get("/", function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(error){
        res.send(error);
    })
})

router.post("/", function(req, res){
    db.Todo.create(req.body)
    .then(function(todo){
        res.status(201).json(todo);
    })
    .catch(function(error){
        res.send(error);
    })
})

router.get("/:todoid", function(req, res){
    db.Todo.findById(req.params.todoid)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(error){
        res.send(error);
    })
})

router.put("/:todoid", function(req, res){
    //.findOneAndUpdate returns the old data, 
    //{new: true} will set the function to return the updated data
    db.Todo.findOneAndUpdate({_id: req.params.todoid}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(error){
        res.send(error);
    })
})

router.delete(":/todoid", function(req, res){
    db.Todo.findByIdAndRemove(req.params.todoid)
    .then(function(){
        res.json({message: "Todo Deleted"})
    })
    .catch(function(error){
        res.send(error);
    })
})


module.exports = router;