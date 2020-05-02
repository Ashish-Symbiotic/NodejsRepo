const express= require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://Ashish:uW0SCYDZrb7Qk7iA@ashishcluster-8hrzy.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true
,
useUnifiedTopology:true
}).then(()=>{console.warn("db connection done")});