import "./bootstrap.min.css";
import "./bootstrap4.css";
// import "./index.css";
//import "./now-ui-kit.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cache, Home } from "./index";
import { ConsentBanner, ConsentBannerText } from "@bbc/psammead-consent-banner";
import { latin } from "@bbc/gel-foundations/scripts";

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
      <title>Evie</title>
      <meta content="Evie Bot" property="og:title" />
      <meta name="theme-color" content="#7289da" />
      <meta
        content="Evie™ is a feature-rich, easy to use Discord bot built to deliver the best experience of a bot on Discord!"
        property="og:description"
      />
      <meta content="https://jamble.rocks" property="og:url" />
      <meta
        content="https://jamble.rocks/assets/EvieIcon.png"
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
      <div className="banner">
        <div className="py-2 overflow-hidden">
          <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-center items-center">
              <div className="text-sm font-medium text-white">
                Jamble is now Evie <a href="/jambletoevie">Learn More</a>
              </div>
              <div className="ml-6 sm:ml-0"></div>
            </div>
          </div>
        </div>
      </div>
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
        <div class="hover: transition duration-500 hover:scale-125">
          <img src="assets/EvieHead.svg" width={50} height={50} />
        </div>

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
        <div className="title">Invite Evie Today!</div>
        <div className="subtitle">
          and give your server a fun and reliable Discord Bot!
        </div>
        <br />
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          id="GFG"
          className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
        >
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
          <span className="relative z-20 flex items-center text-sm">
            <svg
              className="relative w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Invite Evie
          </span>
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
