const express = require('express');
const connection = require('./database/database');
const bodyparser = require('body-parser');

const EmployeeController = require('./controllers/EmployeesController');
const HomeController = require('./controllers/HomeController');
const HardwareController = require('./controllers/Hardware');
const CompanyController = require('./controllers/CompanyController');

const app = express();
const PORT = process.env.PORT || 3000;

//view engine
app.set('view engine','ejs');
//static content
app.use(express.static('public'));


app.use('/',HomeController);
app.use('/',EmployeeController);
app.use('/',HardwareController);
app.use('/',CompanyController);



connection.authenticate()

app.listen(PORT,()=>{
    console.log('server is up at port:',+ PORT)
})