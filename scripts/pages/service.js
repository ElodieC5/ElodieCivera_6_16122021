
// Main script to collect, return & destructure json data into an "allData" object

let allData ;

async function getPhotographers() {
    return fetch("./data/photographers.json")
    .then(response => response.json())
    .then(data => {
        allData = data;
        const { photographers, media } = allData;
        displayData(photographers, media);
    })
};

getPhotographers();