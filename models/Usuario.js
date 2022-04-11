const mongoose = require('mongoose')
const Usuario = new mongoose.Schema({
    matricula: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    eAdmin: {
        type: String,
        default: 0,
    },
    senha: {
        type: String,
        requiredPaths: true,
    },
});

module.exports = mongoose.model("usuario", Usuario);