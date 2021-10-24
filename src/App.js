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
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/main.css" />
      <link rel="stylesheet" href="css/now-ui-kit.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,800,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,600,700,800,900&display=swap"
        rel="stylesheet"
      />
      <title>Jamble</title>
      <meta content="Jamble - Just Another Music Bot" property="og:title" />
      <meta name="theme-color" content="#7289da" />
      <meta
        content="Jamble is a feature-rich, easy to use Discord music bot built to deliver the best music experience on Discord! Upgrade your server today!"
        property="og:description"
      />
      <meta content="https://jamble.rocks" property="og:url" />
      <meta
        content="https://jamble.rocks/assets/jamble.jpg"
        property="og:image"
      />
      <meta content="#43B581" data-react-helmet="true" name="theme-color" />
      {/*icon support*/}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
      <nav className="navbar navbar-expand-lg bg-transparent">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            src="assets/menuIcon.svg"
            width="20px"
            height="20px"
            style={{ maxWidth: "none !important" }}
          />
        </button>
        <img src="assets/EvieHead.svg" width={50} height={50} />
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: "20px !important" }}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {/*             <li class="nav-item">
                  <a class="nav-link" href="/features">Features</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/features">Dashboard</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/features">Subscribtion</a>
              </li>*/}
          </ul>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Documentation
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/commands.html">
                Commands
              </a>
              <a className="dropdown-item" href="https://paste.ee/r/vghn3">
                Tutorials
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="https://paste.ee/r/vghn3">
                Server settings
              </a>
            </div>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="https://paste.ee/r/l1ZUq">
              About
            </a>
          </div>
        </div>
      </nav>
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
