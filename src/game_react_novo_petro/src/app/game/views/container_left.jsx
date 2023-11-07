import React, { useState, useEffect } from 'react';
import '../game js/framework/js-yugioh-assets/src/styles/main.css'
import '../game js/framework/js-yugioh-assets/src/styles/containers_and_frames.css'
import '../game js/framework/js-yugioh-assets/src/styles/buttons.css'

import { GameModel, GameView, GameController } from '../game js/framework/js-yugioh-assets/src/scripts/engine';


function ContainerLeft() {
    const [score, setScore] = useState({ playerScore: 0, computerScore: 0 });

    const gameModel = new GameModel();
    const gameView = new GameView(gameModel);
    const gameController = new GameController(gameModel, gameView);

    useEffect(() => {
    }, []);

    return (
        <>
            <div className="container__left framed-golden-2">
                <div className="score_box frame">
                    <span id='score_points'>Win: {score.playerScore}   |    Lose: {score.computerScore}</span>
                </div>
                <div className="menu_avatar">
                    <img id="card-image" />
                </div>
                <div className="card_details frame">

                    <p id='card-name'>Selecione</p>
                    <p id='card-type'>uma carta</p>

                </div>


            </div>
        </>
    );
}

export default ContainerLeft;