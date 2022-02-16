
// Main script to collect, return & destructure json data into an "allData" object



async function getPhotographers() {
    return fetch("./data/photographers.json")
    .then(response => response.json())
    .then(data => data);
};

