import React from 'react'
import Member from './Member'

export default props =>(
    <div>
        <Member nome="Jonathan " sobrenome={props.sobrenome}/>
        <Member nome="Fatima " sobrenome={props.sobrenome}/>
        <Member nome="Jessica " sobrenome={props.sobrenome}/>
        <Member nome="Anna " sobrenome={props.sobrenome}/>
    </div>
)