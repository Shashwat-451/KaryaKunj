const express=require("express");
const app=express();
const {dbconnect}=require("./config/database")
const User=require("./routes/User")
app.get("/",(req,res)=>{
  return res.status(200).json({
    success:true,
    message:"Your server is up and runninh"
  })
})
app.use(express.json())
dbconnect();
app.use("/user",User);

app.listen(4000,()=>{
    console.log("Listening at port 4000");
})

