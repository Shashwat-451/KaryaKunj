const mongoose=require("mongoose");

require("dotenv").config();
const DB=process.env.Database_Url;

const dbconnect=()=>{
    mongoose.connect(process.env.Database_Url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB Connection Successfull");
    })
    .catch((err)=>{
        console.log("Connection Failed");
        console.log(err);
        process.exit(1);
    })
}

module.exports={dbconnect};