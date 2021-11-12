const mongoose = require("mongoose")
const mangoSchema = mongoose.Schema({
    types: String,
    colours: String,
    cost: Number
})

module.exports = mongoose.model("Mango", mangoSchema)