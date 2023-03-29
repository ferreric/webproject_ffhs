// Grab the ships data from swapi.dev

async function getShips(page = 1) {
    let url = `https://swapi.dev/api/starships/?page=${page}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// Replace the starship sections with actual data
async function renderShips(page = 1) {
    let ships = await getShips(page)
    let html = '';
    ships.results.forEach(ship => {
        let htmlSegment = `
            <article class="starship">
              <h2>${ship.name}</h2>
                <div>
                  <span>Model: </span>
                  ${ship.model}
                </div>
                <button onclick="renderDetail('${ship.url}')">Details!</button>
            </article>`

        html += htmlSegment;
    });
    let shipSection = document.querySelector('.starship-list')
    shipSection.innerHTML += html;
}

renderShips()

// Implement the load more button
const moreButton = document.getElementById('load-more')
let pageCount = 1
moreButton.addEventListener('click', () => {
    if (pageCount < 4) {
        renderShips(++pageCount)
    }
    else {
        moreButton.setAttribute('disabled', 'true')
        moreButton.innerText = "End reached"
    }
})

// Implement the "details" button to show the ship info in the div below
async function getDetails(ship = 'https://swapi.dev/api/starships/74') {
    let url = `${ship}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderDetail(ship = 'https://swapi.dev/api/starships/74') {
    let details = await getDetails(ship)
    console.log(details)
    let html = `
              <p>Name: ${details.name}</p>
              <p>Model: ${details.model}</p>
              <p>Cargo Capacity: ${details.cargo_capacity}</p>
              <p>Consumables: ${details.consumables}</p>
              <p>Cost in credits: ${details.cost_in_credits}</p>
              `
    let detailSection = document.querySelector('.starship-detail')
    detailSection.innerHTML = html;
}

//renderDetail('https://swapi.dev/api/starships/2')