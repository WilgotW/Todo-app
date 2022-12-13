const router = require("express").Router();

router.post("/add", (req, res) => {
    const body = req.body;
    res.send(body.name);
});

module.exports = router;