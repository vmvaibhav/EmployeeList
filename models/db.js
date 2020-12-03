const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vmvaibhav:vmvaibhav@todo-kycnl.mongodb.net/EmployeeDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err) console.log("MongoDB Connection successful");
    else 
    {
        console.log("Database connection error, see the error log below.");
        console.log(err);
    }

    
});

require('./employee.model');
