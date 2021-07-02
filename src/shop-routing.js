import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./User/shop/shop";

import { jhunjhunwala } from "./Data/shops/shop-indivisual-data";

const ShopRouting = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/jhunjhunwala">
          <Shop props={jhunjhunwala} />
        </Route>
      </Switch>
    </Router>
  );
};

export default ShopRouting;
