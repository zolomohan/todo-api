//Packages
let express = require('express'),
    bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Models
let todoAPIRoutes = require('./routes/todoAPI');
app.use("/api/todos", todoAPIRoutes);

app.get("/", function(req, res){
    res.json("Root Route");
})

let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Todo API Started on Port "+port);
})