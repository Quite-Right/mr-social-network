import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    
}

const NotFound = (props: Props) => {
    return (
        <div>
            <Link to='/'>Main</Link>
            <Link to='/message'>Message</Link>
        </div>
    )
}

export default NotFound