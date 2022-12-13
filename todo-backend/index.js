const mongoose = require("mongoose")
const express = require('express');
const app = express();


//routes
const authRoute = require("./Routes/auth");

//connect to database
const url = process.env.DATABASE_URL.toString();
mongoose.connect(url, () => console.log("Connected to TodoDatabase"));

app.get("/", (req, res) => {
    res.send("Hello");
})

//middleware
app.use(express.json());
//router middleware
app.use("/todo", authRoute);

app.listen(3000, () => console.log("live"));