const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    dob: {
        type: String,
    },
    gender: {
        type: String,
        unique:false,
    },
    contact: String,
});

const PatientModel = mongoose.model("patient", PatientSchema)
module.exports = { PatientModel }