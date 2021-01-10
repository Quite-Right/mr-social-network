import React, { ReactElement, useState } from 'react'

interface Props {
    
}

function User({}: Props): ReactElement {
    return(
        <div className="logIn">
            <div className="logIn-button">Profile</div>
            <div className="logIn-button">Log Out</div>
        </div>
    )
}

export default User;