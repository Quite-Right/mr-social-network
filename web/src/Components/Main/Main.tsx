import React, { ReactElement } from 'react'
import uwu from '../../Images/main.gif';

interface Props {
    
}

function Main({}: Props): ReactElement {
    return (
        <div className="main">
            
            <img src={uwu} alt="loading..." />
            
        </div>
    )
}

export default  Main;