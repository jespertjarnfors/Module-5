let selectedCategory = null;
// Ensuring that the page will load with all items initially.
let fetchedData = null;
// Storing the fetched data to avoid unnecessary API calls.

// Enabling the displayData to filter via category.
function setSelectedCategory(category) {
    selectedCategory = category;
} 


document.addEventListener("DOMContentLoaded", function () {
    var collapseOne = new bootstrap.Collapse(document.getElementById("collapseOne"), {
        toggle: false
    });
}); // Added line to prevent the accordion/drop-down menu to not be collapsed/in focus when the page first loads.

// Event-handlers for the four different categories.
document.getElementById("mens").addEventListener("click", function (event) {
    event.preventDefault();
    setSelectedCategory("men's clothing");
    addCard();
});

document.getElementById("jewelery").addEventListener("click", function (event) {
    event.preventDefault();
    setSelectedCategory("jewelery");
    addCard();
});

document.getElementById("electronics").addEventListener("click", function (event) {
    event.preventDefault();
    setSelectedCategory("electronics");
    addCard();
});

document.getElementById("womens").addEventListener("click", function (event) {
    event.preventDefault();
    setSelectedCategory("women's clothing");
    addCard();
});


// Function to fetch the data through the fakestoreRoute.

function getAllProducts() {
    return fetch("/store/products")
        .then((res) => {
            if (res.status !== 200) {
                throw new Error(`Network response was not ok (HTTP status ${res.status})`);
            }
            return res.json();
        })
        .catch((error) => {
            console.error(error);
            // Logging any errors.
        });
}

function addCard() {
    if (fetchedData === null) {
        // Fetch data only if it hasn't already been fetched.
        getAllProducts()
            .then((data) => {
                fetchedData = data;
                displayData();
            });
    } else {
        // Use the already fetched data stored in fetchedData.
        displayData();
    }
}

function displayData() {
    document.querySelector('#card-list').innerHTML = "";

    fetchedData.forEach(item => {
        if (!selectedCategory || item.category === selectedCategory) {
            const template = document.getElementById("card-template")
                .content.cloneNode(true);

            template.querySelector('.card-img-top').src = item.image;
            template.querySelector('.card-img-top').alt = item.title;
            template.querySelector('.card-title').innerText = item.title;
            template.querySelector('.card-category').innerText = item.category;
            if (item.description.length > 55) {
                template.querySelector('.card-description').innerText = item.description.slice(0, 55) + "...";
            } else {
                template.querySelector('.card-description').innerText = item.description;
            }
            template.querySelector('.card-price').innerText = `$${item.price}`;

            document.querySelector('#card-list')
                .appendChild(template);
        }
    });
}

addCard(); // Initial call populate the page when it loads.

