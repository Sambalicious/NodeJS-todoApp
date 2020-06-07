var data = [{item: 'sleep'}, {item:'walk dog'}, {item:'jog'}, {item: 'read novel'}]

module.exports = function(app){
    
    app.get('/todo', (req, res)=>{
        res.render('todo', {todos:data});
    
    })

    app.post('/todo', (req, res)=>{

    })

    app.delete('/todo', (req,res)=>{

    })
}