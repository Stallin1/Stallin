import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
