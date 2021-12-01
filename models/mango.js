const mongoose = require("mongoose")
const newmangoSchema = mongoose.Schema({
    types:{
        type: String,
        minLength: 6
    }, 
    colours: {
        type: String,
        minLength: 3
    },
    cost: Number
})

module.exports = mongoose.model("newmango", newmangoSchema)