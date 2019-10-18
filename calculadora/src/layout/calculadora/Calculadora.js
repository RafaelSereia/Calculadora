import React from 'react';
import Tela from './tela/Tela'
import Teclado from './teclado/Teclado'

class Calculadora extends React.Component
{
   state =
   {
       equacao: '',
       resultado: 0
   }

   clickBotao = event =>
   {
       let equacao = this.state.equacao
       const botaoClicado = event.target.innerHTML

       if(botaoClicado === 'AC')
       {
           return this.zerarTela()
       }
       else if((botaoClicado >= '0' && botaoClicado <= '9') || botaoClicado === ',')
       {
           equacao += botaoClicado
       }
       else if(['+', '-', '*', '/', '%'].indexOf(botaoClicado) !== -1)
       {
           equacao += ' ' + botaoClicado
       }
       else if(botaoClicado === '=')
       {
           try
           {
               const avaliarResultado = eval(equacao)
               const resultado = Number.isInteger(avaliarResultado) ? avaliarResultado : avaliarResultado.toFixed(2)
               this.setState({resultado})
           }
           catch (error)
           {
                alert('Erro')
           }
       }
       else
       {
           equacao = equacao.trim()
           equacao = equacao.substr(0, equacao.length -1)
       }

       this.setState({equacao: equacao})
   }

   zerarTela()
   {
       this.setState({equacao: '', resultado: 0})
   }

    render()
    {
        return(
            <main className="calculadora">
                <Tela 
                    equacao={this.state.equacao} 
                    resultado={this.state.resultado}>
                </Tela>
                <Teclado clickBotao={this.clickBotao}></Teclado>
            </main>
        )    
    }
}

export default Calculadora