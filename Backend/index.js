const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
require("./db/conn");
app.use(require('./router/app'));
app.get("/", (req, res) => {
   res.send("hi");
});
app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`);
});
