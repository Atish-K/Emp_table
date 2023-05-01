const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        Eid:{
            type:String,
            required:true,
            unique:true
        },
        Ename:{
            type:String,
            required:true
        },
        work:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        religion:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        catcerti:{
            type:String,
            required:true
        },
        DOB:{
            type:String,
            required:true
        },
        DOJ:{
            type:String,
            required:true
        },
        exp:{
            type:String,
            required:true
        },
        add:{
            type:String,
            required:true
        }
})

const users = new mongoose.model("users",userSchema);

module.exports = users;