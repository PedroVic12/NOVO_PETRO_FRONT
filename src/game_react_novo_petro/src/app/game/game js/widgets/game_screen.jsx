import React, { useState, useEffect } from 'react';

import '../framework/js-yugioh-assets/src/styles/main.css'
import '../framework/js-yugioh-assets/src/styles/containers_and_frames.css'
import '../framework/js-yugioh-assets/src/styles/buttons.css'



import Olho from "../framework/js-yugioh-assets/src/assets/icons/millenium2.png"
import Video from "../framework/js-yugioh-assets/src/assets/video/yugi.mp4"

import { GameModel, GameView, GameController } from '../framework/js-yugioh-assets/src/scripts/engine';
import ContainerLeft from '../../views/container_left';
import ContainerRight from '../../views/container_right';

function GameScreen() {
    const [score, setScore] = useState({ playerScore: 0, computerScore: 0 });

    const gameModel = new GameModel();
    const gameView = new GameView(gameModel);
    const gameController = new GameController(gameModel, gameView);

    function initState() {
        console.log(gameModel)
        console.log(gameView)
        console.log(gameController)
    }
    useEffect(() => {
        initState();
        gameController.initCardGameReact();
    },); // Isso garante que a inicialização ocorra apenas uma vez

    const handleButtonClick = async () => {
        await gameController.setCardsField();
        const newScore = gameController.getUpdatedScore();
        setScore(newScore);
    };

    return (
        <>
            <div className="bg-video"></div>
            <div className="container">
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
                <div className="container__right">
                    <div className="card-box__container">

                        <div className="card-box framed" id='computer-cards'></div>

                        <div className="card-versus" >
                            <div className="versus-top">
                                <div className="card-infield">
                                    <img id='player-field-card' height="180px" width='125px' />
                                </div>

                                <img src={Olho} height='100px' />

                                <div className="card-infield">
                                    <img id='computer-field-card' height="180px" width='125px' />
                                </div>
                            </div>
                            <div className="versus-bottom">
                                <button onClick={() => console.log('clicked')} id='next-duel' class='rpgui-button' type="submit" value="Submit">End Turn</button>
                            </div>
                        </div>

                        <div className="card-box framed" id='player-cards'></div>
                    </div>
                </div>
            </div>
        </>
    );
}




export { GameScreen };



function GamePage() {
    const [score, setScore] = useState({ playerScore: 0, computerScore: 0 });


    const gameModel = new GameModel();
    const gameView = new GameView(gameModel);
    const gameController = new GameController(gameModel, gameView);

    function initState() {
        console.log('teste')
        console.log(gameModel)
        console.log(gameView)
        console.log(gameController)
    }
    useEffect(() => {
        // initState();
        // gameController.initCardGameReact();
    }, []); // Isso garante que a inicialização ocorra apenas uma vez


    return (
        <>
            <div className="container">
                <ContainerLeft>
                    oi
                </ContainerLeft>


                <ContainerRight>
                    <VideoWidget></VideoWidget>
                </ContainerRight>
            </div>
        </>
    );
}

export { GamePage };


const VideoWidget = () => {
    return (
        <>
            <div className="bg-video"></div>
            <video src={Video} className="video">

                <source src={Video} type='video/mp4' />

            </video>
        </>
    );
}

export { VideoWidget };