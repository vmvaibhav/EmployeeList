var database = require('./models/db');
const express = require('express');
var app = express();
var employeeController = require('./controllers/employeeController');
const path = require('path');
const exphbs = require('express-handlebars');

app.listen(3000, ()=>{
    console.log("Express Server started at port: 3000");
});

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.use('/employee', employeeController);