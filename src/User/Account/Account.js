import React from 'react';
import './Account.css';
import Orders from './Orders/Orders';
import Payment from './Payment/Payment';
import Profile from './Profile/Profile';
import Sidebar from './Sidebar/Sidebar'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function Account() {

    return (
        <BrowserRouter>
            <div className='Head' >
                <Sidebar/>
                <Switch>
                    <Route exact="true" path="/account/profile"><Profile/> </Route>
                    <Route exact="true" path="/account/payment"><Payment/> </Route>
                    <Route exact="true" path="/account/orders"><Orders/> </Route>
                    <Redirect  path="/account" to="/account/profile" />
                </Switch>
               
            </div>
        </BrowserRouter>
    )
}

export default Account;
