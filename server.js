const express = require('express');
const mongoose = require ("mongoose");
const app = express();
const engine = require('express-handlebars');
const bodyParser = require('body-parser');

const MongoStore = require('connect-mongo');
const port = 3000;
const store = MongoStore.create({
  mongoUrl: 'mongodb://127.0.0.1/Health_care'
});

const connect = require("./startup/db");
app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use("/images", express.static(__dirname + "/public/images"));
app.use(express.urlencoded({ extended:false }));

// Route Connection
require('./startup/route')(app);
//DB Connection
require('./startup/db')(connect);

app.listen(port, async () => {
  console.log(`App listening on port ${port}`)
})

