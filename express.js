var express =require('express');
var app=express();
app.get('/',function(req,res){
    res.send('This is homepage');
});
app.listen(3000);