const mongoose=require("mongoose");
require("dotenv").config();

exports.dbconnect=()=>{
    mongoose.connect("mongodb+srv://shash45:Shammy123@mernprojects.leehvmd.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        UseUnifiedTopology:true
    })
    .then(()=>{
        console.log("Databse Connected successfully");
    })
    .catch((err)=>{
        console.log("Error in connecting");
        console.log(err);
        process.exit(1);
    })
}