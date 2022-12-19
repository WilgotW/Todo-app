const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        min: 1
    },
    token: {
        type: String,
        required: true,
        min: 1
    }
})

module.exports = mongoose.model("Todo", todoSchema);