const mongoose = require('mongoose');
const User = require('./Users')

mongoose.connect('mongodb://localhost/testdb')

const run = async()=>{
    const user = new User({name : 'md', age: 15})
    await user.save()
    console.log(user);
}

run()
