const mongoose = require('mongoose');
async function connect () {
    await mongoose
    .connect('mongodb://127.0.0.1/Health_care')
    .then(() => console.log('note_app Database connected successfully...'));

}

module.exports = connect