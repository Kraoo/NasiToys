let lastScrollTop = 0;
let lastScrollTime = new Date().getTime();
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let currentTime = new Date().getTime();
    let scrollSpeed = Math.abs(currentScroll - lastScrollTop) / (currentTime - lastScrollTime);

    if (currentScroll > lastScrollTop) {
        let animationDuration = Math.min(3000 / scrollSpeed, 3000);
        nav.style.transition = 'transform ' + animationDuration + 'ms';
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transition = 'transform 0.5s';
        nav.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    lastScrollTime = currentTime;
});

var particles = Particles.init({
	selector: '.background',
  color: '#0B6623'
});

document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchBar").value;
    searchProducts(searchTerm);
});

function searchProducts(searchTerm) {
    var results = products.filter(function(product) {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    displayResults(results);
}

var products = [
    { id: 1, name: "Product 1", description: "Description of Product 1" },
    { id: 2, name: "Product 2", description: "Description of Product 2" },
    { id: 3, name: "Product 3", description: "Description of Product 3" },
];

function displayResults(results) {
    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; 

    if (results.length > 0) {
        results.forEach(function(product) {
            var resultItem = document.createElement("div");
            resultItem.textContent = product.name;
            resultItem.classList.add("result-item");
            resultItem.addEventListener("click", function() {
                document.getElementById("searchBar").value = product.name;
                searchResults.innerHTML = ""; 
            });
            searchResults.appendChild(resultItem);
        });
        searchResults.style.display = "block"; 
    } else {
        searchResults.style.display = "none"; 
    }
}

function hideResultsIfEmpty() {
    var searchTerm = document.getElementById("searchBar").value.trim();
    var searchResults = document.getElementById("searchResults");
    if (searchTerm === "") {
        searchResults.innerHTML = ""; 
        searchResults.style.display = "none"; 
    }
}

document.getElementById("searchBar").addEventListener("input", function() {
    var searchTerm = this.value.trim();
    var filteredProducts = products.filter(function(product) {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    displayResults(filteredProducts);
});

document.getElementById("searchBar").addEventListener("blur", hideResultsIfEmpty);

document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key === "Backspace" || event.key === "Delete") {
        hideResultsIfEmpty();
    }
});

document.addEventListener("click", function(event) {
    var searchResults = document.getElementById("searchResults");
    if (!event.target.matches("#searchBar") && !event.target.matches(".result-item")) {
        searchResults.innerHTML = ""; 
        searchResults.style.display = "none"; 
    }
});

const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

searchButton.addEventListener('click', function() {
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
});
