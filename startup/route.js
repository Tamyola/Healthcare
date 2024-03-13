module.exports = function (app) {
    app.use('/', require('../routes/router'))
    app.use('/staff', require('../routes/staff'))
    app.use('/patient', require('../routes/patient'))
}