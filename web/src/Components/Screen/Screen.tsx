import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'

import LogIn from './LogIn/LogIn';
import Main from "./Main/Main";
import Message from "./Message/Message";
import News from "./News/News";
import Registration from './Registration/Registration';
import NotFound from './NotFound/NotFound';

interface Props {
    
}

const Screen = ({}: Props): ReactElement => {
    return (
        <Switch>
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/' component={Main} />
            <Route path='/message' component={Message} />
            <Route path='/news' component={News} />
            <Route exact path='/registration' component={Registration} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default  Screen;