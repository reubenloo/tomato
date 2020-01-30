const express = require("express");
const app = express();
const path = require('path')

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(function (req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
