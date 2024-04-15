import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.mjs";

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://piyush2002panwar:GEVr2dKq5A5CnejH@cluster0.rivcjo2.mongodb.net/library1").then(() => {console.log("database connected")}).catch((err)=> {console.log(err)});

app.use('/', router);
app.listen(8000, function(){console.log("Server started at port: 8000")});
