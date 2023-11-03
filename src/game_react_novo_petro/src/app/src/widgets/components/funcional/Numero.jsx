
import React, { useState, useEffect } from 'react';

export default function Numero(props) {
    return (
        <p>
            <p>Valor do Estado em Numero: {props}</p>
            <button  onClick={()=> props.setNum(props.num+10)}   type="button">Incrementar 10</button>
        </p>
    )
}