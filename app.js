const mongoose = require('mongoose');
const User = require('./Users')

mongoose.connect('mongodb://localhost/testdb', ()=>{
    console.log('connected')
})