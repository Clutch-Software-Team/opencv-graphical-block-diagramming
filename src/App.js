import Home from "./pages/Home";
import Docs from "./pages/Document";
import Playground from "./Playground";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/playground" exact component={Playground} />
          <Route path="/docs" exact component={Docs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
