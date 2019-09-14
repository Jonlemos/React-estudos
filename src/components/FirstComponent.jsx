import React from 'react'
let isLegal = true

export default (props) =>(
    <div>
        <h1>{props.value}</h1>
        <h2>{props.aBcD}</h2>
        <p>Legal ? {isLegal ? 'sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>
)

// export default () => (
//     <h1>Fist Component!</h1>
// )
    
// export default () =>{
//     return <h1>Fist Component!</h1>
// }
// export default function() {
//     return <h1>Fist Component!</h1>
// }


// export default first
// function first() {
//     return <h1>Fist Component!</h1>
// }


// export default first