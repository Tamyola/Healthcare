const mongoose = require('mongoose');
const StaffSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    department: {
        type: String,
    },
    position: {
        type: String,
    },
    contact: String,
});

const StaffModel = mongoose.model("staff", StaffSchema)
module.exports = { StaffModel }