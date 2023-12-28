const removePlayer = () => {
    const scalatedPlayers = document.getElementById('scalated-players');
    const numberOfPlayer = (<HTMLInputElement>document.getElementById('number-of-player')).value;
    const shirtnumberOfPlayer = document.getElementById(`player-${numberOfPlayer}`);

    if (!numberOfPlayer) {
        return alert('insira o número do jogador que deseja remover')
    }

    if (!shirtnumberOfPlayer) {
        return alert(`Jogador de número ${numberOfPlayer} não existe`)
    }

    scalatedPlayers?.removeChild(shirtnumberOfPlayer)
}