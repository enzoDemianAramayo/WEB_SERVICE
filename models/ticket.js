const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
    estado: {
        type: String,
        required: false,
        default: "CONFIRMADO"
    }
})

module.exports = mongoose.model('ticket', ticketSchema);