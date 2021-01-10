import React, { ReactElement } from 'react'
import Main from "./Main/Main";
import Message from "./Message/Message";
import News from "./News/News";

interface Props {
    
}
const Screen = ({}: Props): ReactElement => {
    return (
        <>
        <Main />
        {/* <Message /> */}
        {/* <News /> */}
        </>
    )
}

export default  Screen;