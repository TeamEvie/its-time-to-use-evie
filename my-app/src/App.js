import "./bootstrap.min.css";
import "./bootstrap4.css";
// import "./index.css";
//import "./now-ui-kit.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cache, Home } from "./index";

import { darkWave } from "./darkWave";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cache" exact component={() => <Cache />} />
        </Switch>
      </Router>
      <div className="page_end"></div>
      <div className="card-body gs-card">
        <div className="title">Invite Jamble Today!</div>
        <div className="subtitle">
          and give your server a fun and reliable music bot!
        </div>
        <br />
        <a
          className="btn btn-primary btn-lg"
          href="https://dsc.gg/jamble"
          role="button"
        >
          Invite Jamble!
        </a>
      </div>
      <br />
      <div className="page_end"></div>
      <div className="footer">
        <br />
        <div className="twisttaan">
          made with ❤️ by<a href="https://github.com/twisttaan"> twisttaan</a>
        </div>
      </div>
      <div className="flex">
        <darkWave />
      </div>
    </div>
  );
}

export default App;
