let express = require('express'),
    mongoose = require('mongoose');

let todoAPIRoutes = require('./routes/todoAPI');

let app = express(),
    port = process.env.PORT || 3000;

app.use("/api/todos", todoAPIRoutes);

app.get("/", function(req, res){
    res.json("Hello from Root");
})

app.listen(port, function(){
    console.log("Todo API Started on Port "+port);
})