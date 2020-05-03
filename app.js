const express= require('express');
const mongoose = require('mongoose');
const app = express();
const user = require('./users');
mongoose.connect('mongodb+srv://Ashish:uW0SCYDZrb7Qk7iA@ashishcluster-8hrzy.mongodb.net/tutorialdemo?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{console.warn("db connection done")});
user.find({},function(err,users){
    if(err)
    {
        console.warn("There is an error"+err);
    }
    else
    {
        console.warn(users);
    }
})