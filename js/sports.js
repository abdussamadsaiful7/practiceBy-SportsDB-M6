
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
    //console.log(players)
    const containerPlayer = document.getElementById('all-player');
    containerPlayer.innerHTML = '';
    players.forEach((player) =>{
        console.log(player)
        const {strThumb, strPlayer, strNationality} = player;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${strThumb ? strThumb:'https://picsum.photos/200/300?nocache=<?php echo microtime()'}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${strPlayer}</h5>
                  <p class="card-text">Nationality: ${strNationality}</p>
                </div>
            </div>
        `;
        containerPlayer.appendChild(div);
    });
   
};



searchAllData();