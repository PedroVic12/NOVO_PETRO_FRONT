import React, { useState, useEffect } from 'react';
import ledVerde from '../../../../assets/led_green.png'
import ledVermelho from '../../../../assets/led_vermelho.png'

const LigadoDeslisgadoWidget = () => {
    const [ligado,setLigado] = useState(false)

    return ( 
        <>
        <img style={{width:'64px'}} src={ligado?ledVerde : ledVermelho}></img>
        <button onClick={()=>setLigado(!ligado)}>{ligado? 'Desligar': 'Ligar'}</button>
        </>
     );
}
 
export default LigadoDeslisgadoWidget;