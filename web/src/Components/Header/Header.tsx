import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom'

import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import LogIn from "./LogIn/LogIn";


import styled from 'styled-components'
import { Menu as MenuIcon }  from '@styled-icons/material'

const StyledMenu = styled(MenuIcon)`
  color: #e60073;
`

interface Props {
    
}
 
const Header = (props: Props): ReactElement => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const data = [
        {
            name: "Main",
            path: "/",
        },
        {
            name: "Message",
            path: "/message",
        },
        {
            name: "News",
            path: "/news",
        },
        {
            name: "Log In",
            path: "/login",
        },
        {
            name: "Registration",
            path: "/registration",
        },
        {
            name: "NotFound",
            path: "/123",
        },
    ];
    return (
        <>
            <Menu isOpened={isOpened} setIsOpened={setIsOpened} data={data} />
            <div className="header">
                <div className="header__menu" onClick={() => setIsOpened(!isOpened)}> 
                    {/* <img src={MenuLogo} alt="" width="20px" height="20px"/> */}
                    <StyledMenu size="25"/>
                </div>
                <NavLink className="header__logo glow" to="/">MR</NavLink>
                <Search />
                <LogIn loggedIn={false} />
            </div>
        </>
    )
}

export default Header;