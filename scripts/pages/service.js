//  -------------------------------------------------------
//  Main script to collect json data
//  Fetch function is called in index & photographer pages
//  -------------------------------------------------------


function getPhotographers() {
	return fetch("./data/photographers.json")
		.then(response => response.json())
		.then(data => data);
}

