const express = require("express");
const app = express();

const products = require("./Data/Products");

app.set("view engine", "ejs");

app.get("/products", (req, res) => {
    res.render("Product", { products });
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});