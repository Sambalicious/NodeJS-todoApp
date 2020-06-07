var express = require('express');
var todoController = require('../../controllers/todoController');
var app = express();

///set up ejs
app.set('view engine', 'ejs');

///// set up for static files
app.use(express.static('./public'))

///fire controllers
todoController(app);

//port 
app.listen(3000);
console.log('listening to port 3000');