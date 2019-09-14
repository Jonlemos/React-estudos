import React from 'react'

export default props =>
    <div>
        <button 
            onClick={()=> props.notificationOut('Praia')}>
            Vou sair</button>
    </div>