
//      Main script to collect json data
//      Fetch function is then called in index & photographer pages
//      -------------------------------------------------------------------------------------------


async function getPhotographers() {
    return fetch("./data/photographers.json")
    .then(response => response.json())
    .then(data => data);
};

