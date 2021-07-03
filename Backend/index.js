const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 8000;

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.get("/", (req, res) => {
   res.send("hi");
});

app.listen(port, () => {
   console.log(`Server is running on ${port} `);
});
