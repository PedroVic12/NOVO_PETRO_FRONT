import Olho from "../game js/framework/js-yugioh-assets/src/assets/icons/millenium2.png"

import React, { useState, useEffect } from 'react';
import '../game js/framework/js-yugioh-assets/src/styles/main.css'
import '../game js/framework/js-yugioh-assets/src/styles/containers_and_frames.css'
import '../game js/framework/js-yugioh-assets/src/styles/buttons.css'

import { GameModel, GameView, GameController } from '../game js/framework/js-yugioh-assets/src/scripts/engine';
import Video from "../game js/framework/js-yugioh-assets/src/assets/video/yugi.mp4"



function ContainerRight() {

    const gameModel = new GameModel();
    const gameView = new GameView(gameModel);
    const gameController = new GameController(gameModel, gameView);

    useEffect(() => {

        gameController.initCardGameReact().then(
            gameView.setCardsField()

        )

    },);


    return (
        <>
            <div className="container__right">
                <div className="bg-video">
                    <video src={Video} className="video" loop autoPlay muted />
                </div>
                <div className="card-box__container">


                    <div className="card-box framed" id='computer-cards'>

                    </div>

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

                    <div className="card-box framed" id='player-cards'>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContainerRight;


