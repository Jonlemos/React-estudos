import React from 'react'
import Son from './Son'


export default props => {
    const notifyOut = 
    place => alert(`Liberado para ${place}`)

        return (
            <div>
                <Son notificationOut={notifyOut}/>
            </div>
        )
}