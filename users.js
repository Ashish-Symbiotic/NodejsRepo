const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId(),
    name:String,
    phone:String,
    address:String

});

module.exports=mongoose.model('users',userSchema);