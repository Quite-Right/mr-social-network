import React, { ReactElement, useState } from 'react';
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import LogIn from "./LogIn/LogIn";
import MenuLogo from  "../../Images/menu.png";

interface Props {
    
}
 
const Header = ({}: Props): ReactElement => {
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