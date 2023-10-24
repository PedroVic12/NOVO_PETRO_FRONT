import React, { useState, useEffect } from 'react';
import Header from '../../widgets/components/funcional/Header';
import ContadorFlutterPage from '../../widgets/components/funcional/ContadorFlutter';
import Dados from '../../widgets/components/funcional/Dados'
import Numero from '../../widgets/components/funcional/Numero'
import Relogio from '../../widgets/components/funcional/Relogio';
import LigadoDeslisgadoWidget from '../../widgets/components/funcional/ligadoState';
import ComponenteWidget from '../../widgets/components/class/ComponenteWidget';

//sfc , cc, ffc

export default function ScreenPage(){

    const nomeProjeto = 'Front End React'
    const layoutNome ='DashBoard'
    const btn = 'Fazer Analise' 


    return(
        <>
        <div>

            <LigadoDeslisgadoWidget></LigadoDeslisgadoWidget>


            <Relogio></Relogio>

            <Dados par1 = {nomeProjeto} par2 = {layoutNome} par3 = {btn}>Dados</Dados>

            <ContadorFlutterPage></ContadorFlutterPage>

            <ComponenteWidget></ComponenteWidget>
        </div>
        </>
    )
}


