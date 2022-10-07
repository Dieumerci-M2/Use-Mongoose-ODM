const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email : String,
    createAt : Date,
    updateAt: Date,
    // bestFriend: mongoose.SchemaType.ObjectId,
    hobbies: [String],
    adresse: {
        quater : String,
        avenue : String,
        city: String
    }
})

const userModel = mongoose.model('User', userSchema)

module.exports  = userModel;