import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./User/auth/auth";
import Cart from "./User/cart/cart";
import Home from "./User/home/home";
import Profile from "./User/profile/profile";
import Shop from "./User/shop/shop";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
