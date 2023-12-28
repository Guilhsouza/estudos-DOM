const addPlayer = () => {
    const scalatedPlayers = document.getElementById('scalated-players');

    const PlayerName: string = (<HTMLInputElement>document.getElementById('name')).value;
    const PlayerNumber: string = (<HTMLInputElement>document.getElementById('number')).value;
    const PlayerPosition: string = (<HTMLInputElement>document.getElementById('position')).value;

    if (!PlayerName || !PlayerNumber || !PlayerPosition) {
        return alert('Adicione todas as informações')
    };

    const players = document.createElement('ul');
    players.id = `player-${PlayerNumber}`

    const nameOfPlayer = document.createElement('li');
    const numberOfPlayer = document.createElement('li');
    const positionOfPlayer = document.createElement('li');

    nameOfPlayer.innerText = `Nome: ${PlayerName}`;
    positionOfPlayer.innerText = `Posição: ${PlayerPosition}`;
    numberOfPlayer.innerText = `Número: ${PlayerNumber}`;

    players.append(nameOfPlayer, numberOfPlayer, positionOfPlayer);

    scalatedPlayers?.appendChild(players);

    (<HTMLInputElement>document.getElementById('name')).value = "";
    (<HTMLInputElement>document.getElementById('number')).value = "";
    (<HTMLInputElement>document.getElementById('position')).value = "";
} 