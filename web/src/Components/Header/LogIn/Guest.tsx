import React, { ReactElement } from 'react'

interface Props {
}

const Guest = (props: Props): ReactElement => {
    return(
        <div className="logIn">
            <div className="logIn-button">Log In</div>
        </div>
    )
}

export default Guest;