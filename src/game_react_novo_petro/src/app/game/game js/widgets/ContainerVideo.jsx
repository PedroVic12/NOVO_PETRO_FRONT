import React from 'react';

import '../../framework/js-yugioh-assets/src/styles/main.css'
import '../../framework/js-yugioh-assets/src/styles/containers_and_frames.css'
import '../../framework/js-yugioh-assets/src/styles/buttons.css'



import Olho from "../../framework/js-yugioh-assets/src/assets/icons/millenium2.png"
import Video from "../../framework/js-yugioh-assets/src/assets/video/yugi.mp4"


function ContainerVideo() {
    return (
        <>
            <div className="bg-video"></div>
            <div className="container">
                <div className="container__left framed-golden-2">
                    <div className="score_box frame">
                        <span>Win: 0   |    Lose: 0</span>
                    </div>
                    <div className="menu_avatar">
                        <img src="" id="card-image" />
                    </div>
                    <div className="card_details frame">

                        <p id='card-name'>oi</p>
                        <p id='card-type'>oi</p>

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

export { ContainerVideo };


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