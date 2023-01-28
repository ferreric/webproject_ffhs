// Grab the ships data from swapi.dev
// Replace the starship sections with actual data
// Implement the load more button
// Implement the "details" button to show the ship info in the div below

fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
    .then(data => console.log(data))

async function getShips() {
    let url = `https://swapi.dev/api/starships/`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderShips() {
    let ships = await getShips()
    console.log(ships)
    let html = '';
    ships.results.forEach(ship => {
        let htmlSegment = `
            <article class="starship">
              <h2>${ship.name}</h2>
                <div>
                  <span>Model: </span>
                  ${ship.model}
                </div>
                <button>Details!</button>
            </article>`

        html += htmlSegment;
    });

    let shipSection = document.querySelector('.starship-list')
    shipSection.innerHTML = html;
}

renderShips()