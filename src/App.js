import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project/:name" component={ProjectDetail} />
        </Switch>
      </HashRouter>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById("root"));

export default App;
