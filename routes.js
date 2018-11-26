const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
 res.render("index.ejs");
});


router.get("/login", (req, res) => {
 res.end("aca va el login!");
});



module.exports = router;
