const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { read } = require("./db");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(read());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("Current db:\n", read());
});