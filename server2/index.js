const express=require("express");
const app=express();
const userRoutes=require("./routes/userRoutes")
const {dbconnect}=require("./config/database")
const cors = require("cors");
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(express.json());

app.use("/user",userRoutes);
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dbconnect();

app.listen(4000,()=>{
    console.log("Listening at 4000")
})