const express= require('express');
const mongoose = require('mongoose');
const app = express();
app.set('view engine','ejs');
var bodyParser= require('body-parser');
var encoder=bodyParser.urlencoded({extended:true});
const user = require('./models/users');
mongoose.connect('mongodb+srv://Ashish:uW0SCYDZrb7Qk7iA@ashishcluster-8hrzy.mongodb.net/tutorialdemo?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{console.warn("db connection done")});
/*user.find({},function(err,users){
    if(err)
    {
        console.warn("There is an error"+err);
    }
    else
    {
        console.warn(users);
    }
})*/
/*const data = new user({
    _id:new mongoose.Types.ObjectId(),
    name:"Buttons",
    email:"buttons@mail.com",
    phone:"9856211478"
});*/
//data.save().then((result)=>{console.warn("result")}).catch(err=>console.log(err));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/profile:name',function(req,res ){
    data1={email:'ashish@email.com',name:"Ashish",address:"Ashish Address",skills:['nodejs','sql','php','js','RPA']};
        console.log(req.params.name);
    res.render('home',{name:req.params.name,data:data1});

});
//second parameter in get or post req act as a middleware
app.post('/login',encoder,function(req,res){
   
    res.render('home');
});
app.get('/login',function(req,res){
    console.log(req.query);
    res.render('login');
});
app.listen(5000,function(){
console.log("Running....");
});