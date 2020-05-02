const express= require('express');

const app = express();
app.set('view engine','ejs');
app.get("/profile/:name",function(req,res){
    console.log(req.params.name);
    data={email:'ashish@email.com',name:'ashish',address:'noida',skills:['nodejs','php','java']}; 
    res.render('home',{name:req.params.name,data:data});
});

app.listen(5000);