import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./User/auth/auth";
import Login from "./User/auth/customer/Login/Login";
import Register from "./User/auth/customer/Register/Register";
import Cart from "./User/cart/cart";
import Home from "./User/home/home";
import Profile from "./User/profile/profile";

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
        <Route exact path="/forgot password">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
