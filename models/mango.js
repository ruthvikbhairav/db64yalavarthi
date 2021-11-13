const mongoose = require("mongoose")
const newmangoSchema = mongoose.Schema({
    types: String,
    colours: String,
    cost: Number
})

module.exports = mongoose.model("newmango", newmangoSchema)