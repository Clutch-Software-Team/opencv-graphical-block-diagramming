import App2 from "./App2";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 
      <Header /> 
      Direkt olarak header componentini burda çağırarak
      her sayfada tekrar render edilmesini engelleyebiliriz.
      Ancak header kısmının bulunmamasını isteyeceğimiz yerler olabilir.
      Not: exact kaldırabilirsin.
      */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/opencv" exact component={App2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
