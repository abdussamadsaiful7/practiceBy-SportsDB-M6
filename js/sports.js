
const searchAllData = () =>{
    const inputElement = document.getElementById('value-field');
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
    .then((data) => console.log(data.players[0]))
}

const displayData = (datum) =>{
const displayContainer = document.getElementById('details-show');
datum.forEach((data)=>{

    
})

}

searchAllData();