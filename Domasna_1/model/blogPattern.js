const mongoose = require("mongoose");
// mongoose se povikuva 


// se kreira patternot na shemata 
const blogPattern = new mongoose.Schema({
    title: {
        type:String,
        required: [true]
    },
    description: {
        type:String,
        required: [true]
    },
    rating: {
        type: Number,
        default: 3,
    },
    time: {
        type:Date,
        default: Date.now
    },
    author: {
        type:String
    }
})


// se kreira imeto blogovi da ja zema dadenata sema 
module.exports = mongoose.model("Blogovi", blogPattern);