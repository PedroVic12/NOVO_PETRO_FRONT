import React, { useEffect, useState } from 'react';
import HomePageScreen from '../../views/homepage/HomePage';
import { Button } from '@material-ui/core'
import GameViewBoard from '../../../game/views/game_view';

function NavigationController() {
    const [pagina, setPagina] = useState('home');

    useEffect(() => {
        const url = window.location.pathname;
        const pagina = url.substring(1)
        setPagina(pagina || 'home');
    }, []);

    const handleNavigate = (newPage) => {
        setPagina(newPage);
        updateURL(newPage);
    };

    const updateURL = (newPage) => {
        window.history.pushState(null, null, `/${newPage}`);
    };

    const renderPage = () => {
        switch (pagina) {

            //paginas
            case 'home':
                return <HomePageScreen></HomePageScreen>
            case 'about':
                return <About />;

            case 'game':
                return <GameViewBoard></GameViewBoard>


            // direcionando as rotas
            default:
                return (
                    <div>
                        <button onClick={() => handleNavigate('home')}>Pagina 1</button>
                        <button onClick={() => handleNavigate('about')}>Pagina 2</button>
                        <button onClick={() => handleNavigate('game')}>JOGO</button>

                    </div>
                );
        }
    };

    //botoes de navegação
    return (
        <div>


            <nav>

                <ul>
                    <li>
                        <button onClick={() => handleNavigate('home')}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigate('about')}>About</button>
                    </li>

                    <li>
                        <button onClick={() => handleNavigate('game')}>JOGO</button>
                    </li>
                </ul>
            </nav>
            {renderPage()}
        </div>
    );
}

function About() {
    return <h2>OLA MUNDO</h2>;
}

export default NavigationController;
