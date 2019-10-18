import React from 'react'
import TelaEquacao from './telaEquacao/TelaEquacao'
import TelaResultado from './telaResultado/TelaResultado'

const tela = (props) =>
(
    <section className="tela">
        <TelaResultado>
            {props.resultado}
        </TelaResultado>
        <TelaEquacao>
            {props.equacao}
        </TelaEquacao>
    </section>
)

export default tela