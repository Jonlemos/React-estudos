import React from 'react'

const approved = ['Leticia', 'Heitor', 'Noahn', 'Jonathan', 'Cristina']

export default props => {
    const gerateItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return(
        <ul>
            {gerateItens(approved)}
        </ul>
    )
}


