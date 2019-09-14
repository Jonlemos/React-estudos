import React from 'react'

//utilizar export no começo da função quando não se tem função anonima: parte comentada

// export 
const CompA = props =>
    <h1>Primeiro diz: {props.value}</h1>
// export 
const CompB = props =>
    <h1>Segundo diz: {props.value}</h1>

    
export {CompA, CompB}
export default CompA