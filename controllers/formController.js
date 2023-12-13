const Form = require('../models/formModel');

exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.send(forms);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.getSingleForm = async (req, res) => {
    const params = req.params;
    try {
        const form = await Form.find({ _id: params.id });
        res.send(form);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.createForm = async (req, res) => {
    const data = req.body;
    if (!data) {
        res.status(400).send({ message: "Please pass the body" });
        return;
    }
    try {
        const form = await Form.create(data);
        res.send({ message: 'Form created successfully', data: form });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.deleteForm = async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(400).send({ message: 'ID not specified' });
            return;
        }
        const form = await Form.findByIdAndDelete(id);
        res.send({ message: 'Form deleted successfully', data: form });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.updateForm = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        if (!id) {
            res.status(400).send({ message: 'ID not specified' });
            return;
        }
        const form = await Form.findByIdAndUpdate(id, { $set: data }, { new: true });
        res.send({ message: 'Form updated successfully', data: form });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

