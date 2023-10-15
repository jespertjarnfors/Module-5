class Fakestore {
    constructor() {
        this.axios = require("axios");
    }

    getProducts() {
        return this.axios.get('https://fakestoreapi.com/products/')
            .then((response) => {
                if (response.status === 200) { // Light validation to ensure that the request is OK before being passed on.
                    return response.data; //
                } else {
                    throw new Error(`Failed to fetch products. Status code: ${response.status}`);
                }
            })
            .catch((error) => {
                throw new Error(`Error while fetching products: ${error.message}`);
            });
    }
}

module.exports = Fakestore;