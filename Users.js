const mongoose = require('mongoose')

const adresse = new mongoose.Schema({
    quater: String,
    avenue: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10
    },
    createAt : {
        type : Date,
        immutable : true,
        default : ()=> Date.now()
    },
    updateAt:{
        type: Date,
        default : ()=> Date.now()
    },
    // bestFriend: mongoose.SchemaType.ObjectId,
    hobbies: [String],
    adresse: adresse, 
})


const userModel = mongoose.model('User', userSchema)

module.exports  = userModel;