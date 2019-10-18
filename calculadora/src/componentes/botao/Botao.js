import React from 'react'

const botao = (props) =>
{
    const classes = ['botao']

    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
    {
        classes.push('botao--' + props.type)
    }

    return(
        <button className={classes.join(' ')} onClick={props.clickBotao}>
            {props.children}
        </button>
    )
}

export default botao