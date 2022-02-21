
// Main script to collect json data

async function getPhotographers() {
    return fetch("./data/photographers.json")
    .then(response => response.json())
    .then(data => data);
};

