console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function renderPokemonCards() {
    data.map((p) => {
        li = document.createElement("li");
        li.classList.add('card');
        
        h2 = document.createElement("h2");
        h2.classList.add('card--title');
        h2.innerHTML = `${p.name.charAt(0).toUpperCase()}${p.name.slice(1)}`;

        img = document.createElement("img");
        img.classList.add('card--img');
        img.width = `256`;
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`


        ul = document.createElement("ul")
        ul.classList.add('card--text')
        ul.innerHTML = 
            `<li>HP: ${p.stats[0].base_stat}</li>
            <li>ATTACK: ${p.stats[1].base_stat}</li>
            <li>DEFENSE: ${p.stats[2].base_stat}</li>
            <li>SPECIAL-ATTACK: ${p.stats[3].base_stat}</li>
            <li>SPECIAL-DEFENSE: ${p.stats[4].base_stat}</li>
            <li>SPEED: ${p.stats[5].base_stat}</li>`

        gamesHeader = document.createElement("h4");
        gamesHeader.innerHTML = `GAMES:`;

        gamesList = document.createElement("ul");
        gamesList.appendChild(gamesHeader)
        gamesList.classList.add('card--text');
        p.game_indices.map((games) => {
            game = document.createElement("li");
            game.innerHTML = `${games.version.name.toUpperCase()}`;
            
            gamesList.appendChild(game);
        })

        li.appendChild(h2);
        li.appendChild(img);
        li.appendChild(ul);
        li.appendChild(gamesList);
        document.getElementsByClassName("cards")[0].appendChild(li);
    }); 
}

renderPokemonCards();