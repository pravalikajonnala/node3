var express =require('express');
var app=express();
app.get('/',function(req,res){
    res.send('This is homepage');
});
app.get('/profile/:id',function(req,res){
    res.send(+req.params.id);
});
app.listen(3000);