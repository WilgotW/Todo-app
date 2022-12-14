const mongoose = require("mongoose")
const express = require('express');
const app = express();
const dotenv = require("dotenv");

dotenv.config();

//routes
const todoRoute = require("./Routes/todoActions");

//connect to database
mongoose.connect(process.env.DATABASE_URL, () => console.log("Connected to TodoDatabase"));

app.get("/", (req, res) => {
    res.send("Hello");
})

//middleware
app.use(express.json());
//router middleware
app.use("/api/todo", todoRoute);

app.listen(3000, () => console.log("live"));