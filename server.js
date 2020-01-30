const express = require("express");
const app = express();
const path = require('path')

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

//serve static files
app.use(express.static('public'))

//logging
app.use(function (req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
