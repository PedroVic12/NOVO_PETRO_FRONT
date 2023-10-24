import React, { useState, useEffect } from 'react';
import Header from '../../widgets/components/funcional/Header';
import ContadorFlutterPage from '../../widgets/components/funcional/ContadorFlutter';
import Dados from '../../widgets/components/funcional/Dados'
import Numero from '../../widgets/components/funcional/Numero'

//sfc , cc, ffc



export default function ScreenPage(){

    const nomeProjeto = 'Front End React'
    const layoutNome ='DashBoard'
    const btn = 'Fazer Analise' 


    return(
        <>
        <div>


        
            <Dados par1 = {nomeProjeto} par2 = {layoutNome} par3 = {btn}>Dados</Dados>

            <ContadorFlutterPage></ContadorFlutterPage>
        </div>
        </>
    )
}


