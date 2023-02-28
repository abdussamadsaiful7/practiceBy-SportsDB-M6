
const searchAllData = () =>{
    const inputElement = document.getElementById('value-field');
    document.getElementById('details-show').innerHTML = '';
    document.getElementById('male').classList.add('d-none');
    document.getElementById('female').classList.add('d-none');
    const inputValue = inputElement.value;
    const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;
    fetch(URL)
    .then((res) => res.json())
    .then((data) => showPlayerData(data.player))
    //console.log(URL);
    
};

showPlayerData = (players) =>{
    document.getElementById('value-field').value ="";
    //console.log(players)
    const containerPlayer = document.getElementById('all-player');
    containerPlayer.innerHTML = '';
    players.forEach((player) =>{
        console.log(player)
        const {strThumb, strPlayer, strNationality,idPlayer} = player;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card shadow rounded w-full h-64 img-thumbnail">
                <img class="" src="${strThumb ? strThumb :'https://picsum.photos/200/300?nocache=<?php echo microtime()'}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${strPlayer}</h5>
                  <p class="card-text">Nationality: ${strNationality}</p>
                </div>
                <div class="my-2 mx-auto">
                    <button onclick="singlePlayer(${idPlayer})" type="button" class="btn btn-outline-info">Details</button>
                    <button type="button" class="btn btn-outline-dark">Delete</button>
                </div>
            </div>
        `;
        containerPlayer.appendChild(div);
    });
   
};

const singlePlayer =(id) =>{
    const URL =`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
    //console.log(URL)
    fetch(URL)
    .then(res => res.json())
    .then((data) => displayData(data.players[0]))
}

const displayData = (datum) =>{
    console.log(datum)
    const {strThumb, strPlayer, strDescriptionEN, strGender} = datum;
const displayContainer = document.getElementById('details-show');
const div = document.createElement('div')
if(strGender === "Male"){
    document.getElementById('male').classList.remove('d-none');
}
else{
    document.getElementById('female').classList.remove('d-none');
}
div.innerHTML =`
    <div class="card mb-3 w-full h-full shadow rounded">
        <div class="row g-0">
            <div class="col-md-4">
              <img class="w-75 h-50" src="${strThumb ? strThumb :'https://source.unsplash.com/random/200x200?sig=1'}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${strPlayer}</h5>
                <p class="card-text">Description: ${strDescriptionEN.slice(0, 500) + "..."}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
        </div>
    </div>
`;
displayContainer.appendChild(div);


}

searchAllData();