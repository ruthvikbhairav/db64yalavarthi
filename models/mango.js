const mongoose = require("mongoose")
const mangoSchema = mongoose.Schema({
    type: String,
    expdate: String,
    cost: Number
})

module.exports = mongoose.model("Mango", mangoSchema)