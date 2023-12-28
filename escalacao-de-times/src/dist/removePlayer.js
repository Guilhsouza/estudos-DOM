"use strict";
const removePlayer = () => {
    const scalatedPlayers = document.getElementById('scalated-players');
    const numberOfPlayer = document.getElementById('number-of-player').value;
    const shirtnumberOfPlayer = document.getElementById(`player-${numberOfPlayer}`);
    if (!numberOfPlayer) {
        return alert('insira o número do jogador que deseja remover');
    }
    if (!shirtnumberOfPlayer) {
        return alert(`Jogador de número ${numberOfPlayer} não existe`);
    }
    scalatedPlayers === null || scalatedPlayers === void 0 ? void 0 : scalatedPlayers.removeChild(shirtnumberOfPlayer);
};
