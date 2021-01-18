import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

interface MenuElem {
    name: string,
    path: string,
    onClick?: ()=>any,
}
interface Props {
    isOpened:boolean,
    setIsOpened:React.Dispatch<React.SetStateAction<boolean>>,
    data: Array<MenuElem>,
}

const Menu = ({isOpened, setIsOpened, data}: Props): ReactElement => {
    return (
        <div className={`menu ${isOpened? "menu_opened" : ""}`}>
            {data.map(({name, path})=>{
                return (
                    <NavLink className="menu_link" to={path} onClick={()=>setIsOpened(false)} key={name}>{name}</NavLink>
                )
            })}
        </div>
    )
}

export default Menu;