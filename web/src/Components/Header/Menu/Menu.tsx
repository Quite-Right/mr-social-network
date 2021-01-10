import React, { ReactElement } from 'react'
import Elem from "./Elem/Elem";

interface Props {
    isOpened:boolean,
}

const Menu = ({isOpened}: Props): ReactElement => {
    return (
        <div className={`menu ${isOpened? "menu__opened" : ""}`}>
            <Elem name="Google" url="http://google.com"/>
            <Elem name="Yandex" url="http://yandex.com"/>
            <Elem name="Rambler" url="http://rambler.ru"/>
        </div>
    )
}

export default Menu;