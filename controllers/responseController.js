const Response = require('../models/responseModel');

exports.getResponses = async (req, res) => {
    try {
        const response = await Response.find({ "formId": req.params.formId });
        res.send({ message: "Response fetched successfully", data: response });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.createResponse = async (req, res) => {
    const data = req.body;
    if (!data) {
        res.status(400).send({ message: "Please pass the body" });
        return;
    }
    try {
        const response = await Response.create(data);
        res.send({ message: 'Response created successfully', data: response });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
