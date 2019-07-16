//Packages
let express = require('express'),
    bodyParser = require('body-parser');

//Models
let todoAPIRoutes = require('./routes/todoAPI');
    
let app = express(),
port = process.env.PORT || 3000;
    
app.use("/api/todos", todoAPIRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.json("Hello from Root");
})

app.listen(port, function(){
    console.log("Todo API Started on Port "+port);
})