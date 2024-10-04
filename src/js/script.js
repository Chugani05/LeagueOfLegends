import Legend from "./legends.js"; // Import the Legend class from the legends.js file

let legends = []; // Array where instances of champions (legends) will be stored

const button = document.querySelector("button"); // Select the button in the DOM

// Add an event listener to the button to wait for the click
button.addEventListener("click", () => {
    // On click, hide the button by changing its visibility
    button.style.visibility = 'hidden'; // Used 'button' directly instead of querying '#button' again

    // Change the visibility of the element with id 'lol' to show it
    document.querySelector('#lol').style.visibility = 'visible';

    // Call the getLegend() function, which will begin the process of showing the Pokémon
    getLegend();
    showLegend();
});

// Async function to fetch champions from the API
async function getLegend() {
    const loadingDataText = document.getElementById('loading-data-text'); // HTML element that shows the "Loading data..." message
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"; // API URL with champion data
    const response = await fetch(url); // Send a request to the API
    const data = (await response.json()).data; // Parse the response to JSON and access the "data" property that contains the champions
    
    // Loop through each champion (legend) in the data obtained from the API
    for (let legend in data) {
        // Create a new instance of the Legend class for each champion and add it to the legends array
        console.log(legend);
        legends.push(new Legend(data[legend]));
    }
    console.log(legends);

    // Remove the "Loading data..." message from the DOM once the data is loaded
    loadingDataText.remove();
}

// This function is responsible for displaying the champions stored in the legends array in the DOM
const showLegend = async () => {
    // Get a reference to the element with ID 'lol' where champion cards will be inserted
    const legendsContainer = document.getElementById("lol");

    // Iterate over each element in the legends array
    for (let i = 0; i < legends.length; i++) {
        let primaryRole = legends[i].tags[0]; // First role of the champion (e.g., Fighter, Mage)
        let secondaryRole = legends[i].tags[1] || ""; // Second role, if any (fallback to empty string if not present)

        // For each champion, create a card with images (champion splash), name, roles, abilities, and stats
        // This HTML structure is dynamically added to the 'lol' container
        legendsContainer.innerHTML += `<div class="card">
                                          <img src="${legends[i].image}" alt="${legends[i].name}">
                                          <br>
                                          ${legends[i].name}<br>
                                          <div class="title">
                                              Title: ${legends[i].title}<br>
                                          </div>
                                          <div class="blurb">
                                              Description: ${legends[i].blurb}<br>
                                          </div>
                                          <div class="stats">
                                              Attack: ${legends[i].attack}, Defense: ${legends[i].defense}, Magic: ${legends[i].magic}, Difficulty: ${legends[i].difficulty}
                                          </div>
                                      </div>`;
    }
}