const express = require('express');
const app = express();


app.get("/e", (req, res) => {
    res.send("Hello");
})

app.listen(3000, () => console.log("live"));