import React from 'react'
import ReactDom from 'react-dom'
import FirstComponent from './components/FirstComponent'
import CompA,{CompB as B}  from './components/TwoComponent'
import MultiElements from './components/MultiElements'
import FamilyLemos from './components/FamilyLemos'
import Family from './components/Family'
import Member from './components/Member'
import ComponentFunctions from './components/ComponentFunctions'
import Father from './components/Father'
import ComponentClass from './components/ComponentClass'


const element = document.getElementById('root')

ReactDom.render(
    <div>
        <ComponentClass value="Im a component Class"/>
        <Father/>
        <ComponentFunctions></ComponentFunctions>
        <Family sobrenome="Kent">
            <Member nome="Clark "/>
            <Member nome="Marta "/>
        </Family>
        <Family sobrenome="Wayne">
            <Member nome="Bruce " sobrenome="Wayne"/>
            <Member nome="Marta " sobrenome="Wayne"/>
        </Family>
        <FamilyLemos sobrenome="Lemos Silva" />
        <MultiElements/>
        <CompA value="Eu sou o B1"/>
        <B value="Eu sou o B2"/>
        <FirstComponent  value="Olá Mundo" aBcD={Math.pow(2,8)}/>
    </div>
    
    
    , element)