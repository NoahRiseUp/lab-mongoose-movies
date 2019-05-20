const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    cathQuotes: String
}, {
        timestamps: true
    })


const celebrity = mongoose.model('celebrity', celebritySchema)

module.exports = celebrity