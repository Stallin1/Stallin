import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () =>{
return(
<Router>
<Switch>
<Route path="/" >
<h1>Home</h1>
</Route>
</Switch>
</Router>
)
}

export default App;