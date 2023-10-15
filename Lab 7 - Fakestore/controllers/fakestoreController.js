const Fakestore = require("../models/Fakestore");
const myStore = new Fakestore(); // Creating a new instance of the Fakestore class.

function fetchProducts(req, res) {
    myStore.getProducts()
        .then((data) => {
            res.json(data); 
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Internal Error" });
            // Simple error-handling logging any potential errors that would occur internally.
        });
}

module.exports = fetchProducts;
