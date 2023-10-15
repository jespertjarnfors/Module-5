const express = require("express");
const fetchProducts = require("../controllers/fakestoreController"); // Importing the fetchProducts function from the router.
const router = express.Router();

router.get("/products", fetchProducts);

module.exports = router;