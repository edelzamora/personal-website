import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import { HashLink } from "react-router-hash-link";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <HashLink path="/" exact component={Home} />
          <Route path="/project/:name" component={ProjectDetail} />
        </Switch>
      </HashRouter>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById("root"));

export default App;
