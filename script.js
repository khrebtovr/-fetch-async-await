async function getAllApi() {
    const response = await fetch('https://rickandmortyapi.com/api');
    const data = await response.json();
    return data;
}
getAllApi()

async function getCharacterAll() {
    const response = await getAllApi();
    const data = await fetch(response.characters);
    const characters = await data.json();
    return characters;
}

async function getLocations() {
    const response = await getAllApi();
    const data = await fetch(response.locations);
    const locations = await data.json();
    return locations;
}

async function getEpisodes() {
    const response = await getAllApi();
    const data = await fetch(response.episodes);
    const episodes = await data.json();
    return episodes;
}


async function tableCreateCharacter() {
    const characters = await getCharacterAll();
    const tableOut = document.getElementById('table-out');
    const table = document.createElement('table');   
    table.setAttribute('border', '1');
    const charactersLength = characters.results.length;
    const tbody = document.createElement('tbody');
    const items = ['name', 'gender', 'species', 'status'];

    for(let i = 0; i < charactersLength; i++){
        const tr = document.createElement('tr');
        
        for(let k = 0; k < 4; k++){
            const td = document.createElement('td');
            let item = characters.results[i][items[k]];
            td.innerHTML = item;
            td.style.padding = '3px';
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
    
    table.appendChild(tbody)
    tableOut.appendChild(table)
}
tableCreateCharacter();


async function tableCreateLocation() {
    const location = await getLocations();
    const tableOut = document.getElementById('table-out');
    const table = document.createElement('table');   
    table.setAttribute('border', '1');
    const locationLength = location.results.length;
    const tbody = document.createElement('tbody');
    const items = ['name', 'type', 'dimension'];

    for(let i = 0; i < locationLength; i++){
        const tr = document.createElement('tr');
        
        for(let k = 0; k < 3; k++){
            const td = document.createElement('td');
            let item = location.results[i][items[k]];
            td.innerHTML = item;
            td.style.padding = '3px';
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
    
    table.appendChild(tbody)
    tableOut.appendChild(table)
}

tableCreateLocation();


async function tableCreateEpisodes() {
    const episode = await getEpisodes();
    const tableOut = document.getElementById('table-out');
    const table = document.createElement('table');   
    table.setAttribute('border', '1');
    const episodesLength = episode.results.length;
    const tbody = document.createElement('tbody');
    const items = ['air_date', 'episode', 'name'];

    for(let i = 0; i < episodesLength; i++){
        const tr = document.createElement('tr');
        
        for(let k = 0; k < 3; k++){
            const td = document.createElement('td');
            let item = episode.results[i][items[k]];
            td.innerHTML = item;
            td.style.padding = '3px';
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
    
    table.appendChild(tbody)
    tableOut.appendChild(table)
}

tableCreateEpisodes();