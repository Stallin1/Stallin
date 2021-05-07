import Login from './customer/Login/Login.js';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
const Auth = () => {
return (
<Router>
<Switch>
<Route exact path="/login">
<Login/>
</Route>
<Route exact path="/login">
<Login/>
</Route>
</Switch>
</Router>
);
};

export default Auth;
