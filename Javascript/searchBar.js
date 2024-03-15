const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

searchButton.addEventListener('click', function() {
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
});
