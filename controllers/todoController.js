var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// mongoose.connect('mongodb://username:password@databaseURL');
mongoose.connect('mongodb+srv://sambalicious:sambalicious@cluster0-jcyfv.mongodb.net/todos');


///create a schema
    var todoSchema = new mongoose.Schema({
        item:String
    })

    ////create a model
    var Todo = mongoose.model('Todo', todoSchema)

    /** 
    ///saving data to database example

    var itemOne = Todo({item:'buy flowers'}).save(error=>{
        if(error) throw error;
        console.log('item saved to database');
    })

    */

    


//var data = [{item: 'sleep'}, {item:'walk dog'}, {item:'jog'}, {item: 'read novel'}];

var urlencodedParser = bodyParser.urlencoded({extended:false});




module.exports = function(app){
    
    app.get('/todo', (req, res)=>{
        
        //get data from mongodb and pass it to view
        Todo.find({}, (err, data)=>{
            if(err) throw error
            res.render('todo', {todos:data});
        })

        
    })

    app.post('/todo',urlencodedParser, (req, res)=>{
            ///get data from the view and add to the database
            console.log(req.body);
            var newData = Todo(req.body).save((err, data)=>{
                if (err) throw err;
                res.json(data);
            })
               
            })

    app.delete('/todo/:item', (req,res)=>{
            //delete data from database
            Todo.find({item:req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
                if (err) throw err;
                res.json(data);
            });

     //   data = data.filter(todo => todo.item.replace(/ /g, '-')!= req.params.item);
       // res.json(data);
    })
}