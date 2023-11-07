import React, { useState, useEffect } from 'react';
import './CardGame.css'; // Importe os estilos CSS

import cardBackImage from './assets/icons/card-back.png';
import dragonImage from './assets/icons/dragon.png';
import magicianImage from './assets/icons/magician.png';
import exodiaImage from './assets/icons/exodia.png';

function CardGame() {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const [playerCards, setPlayerCards] = useState([]);
    const [computerCards, setComputerCards] = useState([]);

    useEffect(() => {
        // Inicialize o jogo quando o componente for montado
        drawInitialCards();
    }, []);

    function drawInitialCards() {
        // Lógica para criar as cartas iniciais para o jogador e o computador
        // ...

        // Exemplo:
        setPlayerCards([
            { id: 0, name: 'Blue Eyes White Dragon', type: 'Paper', imgPath: dragonImage },
            // ...
        ]);

        setComputerCards([
            { id: 1, name: 'Dark Magician', type: 'Rock', imgPath: magicianImage },
            // ...
        ]);
    }

    function handleCardClick(cardId) {
        // Lógica para lidar com o clique em uma carta
        // ...

        // Exemplo: Atualizar a carta selecionada e verificar resultados
        const selected = playerCards.find((card) => card.id === cardId);
        setSelectedCard(selected);

        // Verifique os resultados do duelo e atualize as pontuações
        // ...

        // Exemplo: Atualizar as pontuações
        setPlayerScore(playerScore + 1);
    }

    // Renderize a interface do usuário com base no estado
    return (
        <div className="card-game">
            <div className="player-score">Player Score: {playerScore}</div>
            <div className="computer-score">Computer Score: {computerScore}</div>

            <div className="player-cards">
                {playerCards.map((card) => (
                    <img
                        key={card.id}
                        src={card.imgPath || cardBackImage}
                        alt={card.name}
                        onClick={() => handleCardClick(card.id)}
                    />
                ))}
            </div>

            <div className="computer-cards">
                {computerCards.map((card) => (
                    <img key={card.id} src={card.imgPath || cardBackImage} alt={card.name} />
                ))}
            </div>

            <div className="selected-card">
                {selectedCard && (
                    <div>
                        <img src={selectedCard.imgPath} alt={selectedCard.name} />
                        <p>Name: {selectedCard.name}</p>
                        <p>Type: {selectedCard.type}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardGame;
