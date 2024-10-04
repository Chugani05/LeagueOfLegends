import Legend from "./legends.js"; // Import the Legend class from the legends.js file

let legends = []; // Array where instances of champions (legends) will be stored
const loadingDataText = document.getElementById('loading-data-text'); // HTML element that shows the "Loading data..." message

const button = document.querySelector("button"); // Select the button in the DOM

// Add an event listener to the button to wait for the click
button.addEventListener("click", () => {
    // On click, hide the button by changing its visibility
    button.style.visibility = 'hidden'; // Used 'button' directly instead of querying '#button' again

    // Change the visibility of the element with id 'lol' to show it
    document.querySelector('#lol').style.visibility = 'visible';

    // Call the getLegend() function, which will begin the process of showing the Pokémon
    getLegend();
});

// Async function to fetch champions from the API
async function getLegend() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"; // API URL with champion data
    const response = await fetch(url); // Send a request to the API
    console.log(response);
    const data = (await response.json()).data; // Parse the response to JSON and access the "data" property that contains the champions

    // Loop through each champion (legend) in the data obtained from the API
    for (let legend in data) {
        // Create a new instance of the Legend class for each champion and add it to the legends array
        console.log(legend);
        legends.push(new Legend(data[legend]));
    }

    // Remove the "Loading data..." message from the DOM once the data is loaded
    loadingDataText.remove();
}