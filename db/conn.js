const mongoose = require("mongoose");

const DB = "mongodb+srv://aatish0075:K4Um6DvUgd7dNCyV@cluster0.0p62kzd.mongodb.net/employee_table?retryWrites=true&w=majority";


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connected to database")).catch((error)=> console.log(error.message));

