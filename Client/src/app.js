import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./User/auth/customer/Login/Login";
import ForgotPassword from "./User/auth/customer/ForgotPassword/ForgotPassword";
import Register from "./User/auth/customer/Register/Register";
import Cart from "./User/cart/cart";
import Home from "./User/home/home";
import Profile from "./User/profile/profile";
import Searchfilter from "./User/Basic Components/SearchFilter/serchFilter";

import "./app.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Stallin">
                    <Home />
                </Route>

                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Register />
                </Route>
                <Route exact path="/forgot_password">
                    <ForgotPassword />
                </Route>
                <Route exact path="/sf">
                    <Searchfilter />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
