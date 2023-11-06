import React from "react";


interface CardProps {
    produto: string;
    valor: number;

}


export default function Card(props: CardProps) {
    return (
        <div className='flex justify-center gap-3' >
            <h1>Card</h1>
            <div className='flex flex-col border border-red-800 rounded-sm p-2'>
                <div>Produto: {props.produto} </div>
                <div>Valor R$: {props.valor}</div>


            </div>
        </div>
    );
}

//exportar componente
