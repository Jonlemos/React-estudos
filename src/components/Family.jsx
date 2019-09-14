import React from 'react'
import {ChildrenProps} from '../Useful/Useful'

export default props =>(
    <div>
        
        {/* Clona o objeto e passa todas as propriedades pros filhos*/}
        <h1>Família</h1>
        {ChildrenProps(props)}
        
        
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        })}
        {React.cloneElement(props.children, {...props})} */}

        {/* Passando todas as propriedades*/}
        {/* <h1>Família</h1>
        {React.cloneElement(props.children, props)} */}
        
        {/* Passando apenas uma propriedade*/}
        {/* <h1>Família</h1>
        {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>
)