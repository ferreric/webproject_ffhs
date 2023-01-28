// Grab the ships data from swapi.dev
// Replace the starship sections with actual data
// Implement the load more button
// Implement the "details" button to show the ship info in the div below

fetch('https://swapi.dev/api/starships/9/')
    .then(response => response.json())
    .then(data => console.log(data))

let ships = {}
for (let i = 2; i<=3; i++){ // i == 32 sollte funktionieren; mit lücken
    fetch(`https://swapi.dev/api/starships/${i}/`)
        .then(response => response.json())
        .then(data => ships+=data)
}
console.log(ships)

let htmlSegment = `
    <article class="starship">
      <h2>${ship.name}</h2>
        <div>
          <span>Model: </span>
          ${ship.model}
        </div>
        <button>Details!</button>
    </article>`

let shipSection = document.querySelector('.starship-list')

async function getShips(i) {
    let url = `https://swapi.dev/api/starships/${i}/`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}