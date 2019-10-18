import React from 'react'
import LinhaTeclado from './linhaTeclado/LinhaTeclado'
import Botao from '../../../componentes/botao/Botao'

const teclado = (props) =>
(
    <section className="teclado">
        <LinhaTeclado>
            <Botao clickBotao={props.clickBotao}>AC</Botao>
            <Botao clickBotao={props.clickBotao}>+/-</Botao>
            <Botao clickBotao={props.clickBotao}>%</Botao>
            <Botao clickBotao={props.clickBotao}>+</Botao>
        </LinhaTeclado>
        
        <LinhaTeclado>
            <Botao clickBotao={props.clickBotao}>7</Botao>
            <Botao clickBotao={props.clickBotao}>8</Botao>
            <Botao clickBotao={props.clickBotao}>9</Botao>
            <Botao clickBotao={props.clickBotao}>-</Botao>
        </LinhaTeclado>
        
        <LinhaTeclado>
            <Botao clickBotao={props.clickBotao}>4</Botao>
            <Botao clickBotao={props.clickBotao}>5</Botao>
            <Botao clickBotao={props.clickBotao}>6</Botao>
            <Botao clickBotao={props.clickBotao}>*</Botao>
        </LinhaTeclado>
        
        <LinhaTeclado>
            <Botao clickBotao={props.clickBotao}>1</Botao>
            <Botao clickBotao={props.clickBotao}>2</Botao>
            <Botao clickBotao={props.clickBotao}>3</Botao>
            <Botao clickBotao={props.clickBotao}>/</Botao>
        </LinhaTeclado>
        
        <LinhaTeclado>
            <Botao clickBotao={props.clickBotao}>0</Botao>
            <Botao clickBotao={props.clickBotao}>,</Botao>
            <Botao clickBotao={props.clickBotao}>&larr;</Botao>
            <Botao clickBotao={props.clickBotao}>=</Botao>
        </LinhaTeclado>
    </section>
)

export default teclado