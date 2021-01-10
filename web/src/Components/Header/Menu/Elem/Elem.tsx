import React, { ReactElement } from 'react'

interface Props {
    name: string,
    url: string,
}

const Elem = ({name, url}: Props): ReactElement => {
    return(
        <div className="menu__elem">
            <a href={url} className="menu__elem-link">{name}</a>
        </div>
    )
}

export default Elem;