const express= require('express');
const mongoose = require('mongoose');
const app = express();
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
const data = new user({
    _id:new mongoose.Types.ObjectId(),
    name:"Buttons",
    email:"buttons@mail.com",
    phone:"9856211478"
});
data.save().then((result)=>{console.warn("result")}).catch(err=>console.log(err));