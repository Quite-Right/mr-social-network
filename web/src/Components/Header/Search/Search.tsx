import React, { ReactElement } from 'react'

interface Props {
    
}

function Search({}: Props): ReactElement {
    return (
        <div className="search">
            <input type="text"/> 
        </div>
    )
}

export default Search;
