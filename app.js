const express=require('express');
const app=express();
const checkUrl = require('./middleware');
const router=express.Router();

//app.use(checkUrl);
app.get('/',function(req,res){
   // res.send("Hello Express.js");
    res.sendFile(__dirname+"/home.html");
});
router.get('/about',checkUrl,function(req,res){
   // res.send("Hello Express.js this is about page")
   res.sendFile(__dirname+"/about.html");
});
app.post('/login',function(req,res){
    //res.send("Hello Express.js this is login page")
    res.sendFile(__dirname+"/login.html");
});
app.put('/check',function(req,res){
    //res.send("Hello Express.js this is put page")
    res.sendFile(__dirname+"/check.html");
});
app.delete('/logout',function(req,res){
    //res.send("Hello Express.js this is delete page")
    res.sendFile(__dirname+"/about.html");
});
app.use("/",router);
app.listen(5000);