const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    "title": { type: "string", required: true },
    "image": { type: "string" },
    "questions": { type: {} }
});

module.exports = mongoose.model('Form', formSchema);
