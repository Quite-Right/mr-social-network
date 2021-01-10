import React, { ReactElement, useState } from 'react';
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import LogIn from "./LogIn/LogIn";
import MenuLogo from  "../../Images/menu.png";

interface Props {
    
}

function Header({}: Props): ReactElement {
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <>
            <Menu isOpened={toggle} />
            <div className="header">
                <div className="header__menu" onClick={() => setToggle(!toggle)}> 
                    <img src={MenuLogo} alt="" width="20px" height="20px"/>
                </div>
                <div className="header__logo glow">
                    MR 
                </div>
                <Search />
                <LogIn loggedIn={false} />
            </div>
        </>
    )
}

export default Header;