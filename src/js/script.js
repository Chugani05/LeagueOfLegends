import Legend from "./legends.js"; // Import the Legend class from the legends.js file

let legends = []; // Array where instances of champions (legends) will be stored

const button = document.querySelector("button"); // Select the button in the DOM
const loadingDataText = document.getElementById('loading-data-text'); // Element to show "Loading data..."

loadingDataText.style.visibility = 'hidden'; // Initially hide the loading message

// Add an event listener to the button to wait for the click
button.addEventListener("click", async () => {
    // On click, hide the button by changing its visibility
    button.style.visibility = 'hidden'; // Used 'button' directly instead of querying '#button' again

    // Change the visibility of the element with id 'lol' to show it
    document.querySelector('#lol').style.visibility = 'visible';

    // Show the "Loading data..." message before the fetch
    loadingDataText.style.visibility = 'visible';

    // Call the getLegend() function, which will begin the process of showing the champions
    await getLegend(); // Wait for getLegend to finish

    // Once the data is fetched, call showLegend to display the champions
    showLegend();
});

// Async function to fetch champions from the API
async function getLegend() {
    try {
        const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"; // API URL with champion data
        const response = await fetch(url); // Send a request to the API
        const data = (await response.json()).data; // Parse the response to JSON and access the "data" property that contains the champions
        
        // Loop through each champion (legend) in the data obtained from the API
        for (let legend in data) {
            // Create a new instance of the Legend class for each champion and add it to the legends array
            legends.push(new Legend(data[legend]));
        }
    } 
    catch (error) {
        console.error("No se ha podido descargar los datos de la API, error $(error)")
    }

    // Hide the "Loading data..." message once the data is loaded
    loadingDataText.style.visibility = 'hidden';
}

// This function is responsible for displaying the champions stored in the legends array in the DOM
const showLegend = () => {
    // Get a reference to the element with ID 'lol' where champion cards will be inserted
    const legendsContainer = document.getElementById("lol");

    // Iterate over each element in the legends array
    for (let i = 0; i < legends.length; i++) {

        // For each champion, create a card with images (champion splash), name, roles, abilities, and stats
        // This HTML structure is dynamically added to the 'lol' container
        legendsContainer.innerHTML += `
            <div class="card-container">
                <div class="card">
                    <div class="card-front">
                        <div class="name">${legends[i].name}</div>
                        <img src="${legends[i].image}" alt="${legends[i].name}">
                        <div class="title">Title: ${legends[i].title}</div>
                        <div class="tags">Tags: ${legends[i].tags && legends[i].tags.length > 0 ? legends[i].tags.join(' & ') : 'No tags available'}</div>
                        <br>
                        <div class="stats">
                            <div class="stat">
                                <img src="./assets/imgs/attack.png" class="stats-imgs"> ${legends[i].attack}
                            </div>
                            <div class="stat">
                                <img src="./assets/imgs/defense.png" class="stats-imgs"> ${legends[i].defense}  
                            </div>
                            <div class="stat">
                                <img src="./assets/imgs/magic.png" class="stats-imgs"> ${legends[i].magic}  
                            </div>
                            <div class="stat">
                                <img src="./assets/imgs/difficulty.png" class="stats-imgs"> ${legends[i].difficulty}
                            </div>
                        </div>
                    </div>
                    <div class="card-back">
                        <div class="description">${legends[i].story}</div>
                    </div>
                </div>
            </div>`;
    }
}