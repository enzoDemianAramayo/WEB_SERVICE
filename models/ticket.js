const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
    estado: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model('ticket', ticketSchema);