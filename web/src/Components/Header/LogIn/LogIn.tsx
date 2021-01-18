import React, { ReactElement } from 'react'
import User from "./User";
import Guest from "./Guest"


interface Props {
    loggedIn:boolean,
}

const  LogIn = ({loggedIn}: Props): ReactElement => {
    if (loggedIn){
        return <User />
    } else{
        return <Guest  />
    }
}

export default LogIn;