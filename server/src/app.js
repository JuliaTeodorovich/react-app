const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const users = require("./data/users.json");
const products = require("./data/products.json");
const { PORT, JWT_SECRET } = require("dotenv").config().parsed;
const fs = require("fs");
const fileName = "./src/data/products.json";

function deleteProduct(id) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading products.json:", err);
      return;
    }
    let products = JSON.parse(data);
    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      fs.writeFile(
        fileName,
        JSON.stringify(products, null, 2),
        "utf8",
        (err) => {
          console.log("writing to " + fileName);
          if (err) {
            console.error("Error writing products.json:", err);
          }
        }
      );
    }
  });
}

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/products", function (request, response) {
  response.send(200, products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

app.delete("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  deleteProduct(productId);
  res.json({ message: "Product deleted successfully" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.name === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.listen(PORT);
