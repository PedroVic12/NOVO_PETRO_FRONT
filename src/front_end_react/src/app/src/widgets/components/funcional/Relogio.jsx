import React, { useState, useEffect } from 'react';


const Relogio = () => {

    const comprimentar =() =>{
        const hora = new Date().getHours()

        if (hora >= 0 && hora < 13){
            return <p>Bom dia!</p>
        } else if (hora >=13 && hora < 18){
            return <p>Boa tarde!</p>
        } else {
            return <p>Boa noite!</p>
        }
    }


    return (
        <div>

            <p> Horário atual: {new Date().toLocaleTimeString()}</p>
            {comprimentar()}
        </div> 
     );
}
 
export default Relogio;