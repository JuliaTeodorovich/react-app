const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./data/users.json");
const { PORT } = require("dotenv").config().parsed;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/users", function (request, response) {
  response.send(200, users);
});

app.listen(PORT);
