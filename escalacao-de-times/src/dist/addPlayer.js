"use strict";
const addPlayer = () => {
    const scalatedPlayers = document.getElementById('scalated-players');
    const PlayerName = document.getElementById('name').value;
    const PlayerNumber = document.getElementById('number').value;
    const PlayerPosition = document.getElementById('position').value;
    if (!PlayerName || !PlayerNumber || !PlayerPosition) {
        return alert('Adicione todas as informações');
    }
    ;
    const players = document.createElement('ul');
    players.id = `player-${PlayerNumber}`;
    const nameOfPlayer = document.createElement('li');
    const numberOfPlayer = document.createElement('li');
    const positionOfPlayer = document.createElement('li');
    nameOfPlayer.innerText = `Nome: ${PlayerName}`;
    positionOfPlayer.innerText = `Posição: ${PlayerPosition}`;
    numberOfPlayer.innerText = `Número: ${PlayerNumber}`;
    players.append(nameOfPlayer, numberOfPlayer, positionOfPlayer);
    scalatedPlayers === null || scalatedPlayers === void 0 ? void 0 : scalatedPlayers.appendChild(players);
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
    document.getElementById('position').value = "";
};
