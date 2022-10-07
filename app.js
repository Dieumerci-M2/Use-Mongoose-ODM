const mongoose = require('mongoose');
const User = require('./Users')

mongoose.connect('mongodb://localhost/testdb')

const run = async()=>{
    const user = await User.create({
        name : 'md',
        age: 15,
        hobbies : ['films', 'sport', 'swiming'],
        adresse: {quater : 'kyeshero', avenue : 'Lusake', city : 'Goma'}
    })
    await user.save()
    console.log(user);
}

run()
