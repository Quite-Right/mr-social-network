import React, { ReactElement } from 'react'

interface Props {
    
}

const User = (props: Props): ReactElement => {
    return(
        <div className="logIn">
            <div className="logIn-button">Profile</div>
            <div className="logIn-button">Log Out</div>
        </div>
    )
}

export default User;