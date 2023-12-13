const mongoose = require('mongoose');

const responseSchema = mongoose.Schema({
    "formId": { type: mongoose.Schema.Types.ObjectId, required: true },
    "user": { type: String, required: true },
    "marks": { type: Number, required: true },
});

module.exports = mongoose.model('Response', responseSchema);
