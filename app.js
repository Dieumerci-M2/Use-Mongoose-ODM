const mongoose = require('mongoose');
const User = require('./Users')

mongoose.connect('mongodb://localhost/testdb')

const run = async()=>{
    try {
        const user = await User.create({
            name : 'md',
            age: 3,
            hobbies : ['films', 'sport', 'swiming'],
            adresse: {quater : 'kyeshero', avenue : 'Lusake', city : 'Goma'},
            email: 'dieumerci.md09@gmail.com'
        })
        console.log(user); 
    } catch (e) {
       console.log(e.message) 
    }
}

run()
