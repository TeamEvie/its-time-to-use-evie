import "./bootstrap.min.css";
import "./bootstrap4.css";
// import "./index.css";
//import "./now-ui-kit.css";
import "./App.css";

import { darkWave } from "./darkWave";

function Home() {
  return (
    <div>
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
        <img src="assets/BotLogo.png" width={100} height={20} />
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: "20px !important" }}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#/">
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
          {/*     <button class="btn login-btn btn-outline-accent my-2 my-sm-0" style="font-size: 10px !important;font-family: poppins !important;">LOGIN</button> */}
        </div>
      </nav>
      <div class="grid justify-items-stretch ...">
        <div class="justify-self-center ...">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 text-white">
            It's time to use Evie™ in your Discord server.
          </h1>
          <div class="grid justify-items-stretch ...">
            <div class="justify-self-center ...">
              <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
                Evie™ is a feature-rich, easy to use Discord bot built to
                deliver the best experience of a bot on Discord!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="header">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={0}
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={3}
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={5}
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#7289da" />
          </g>
        </svg>
      </div>
      <div className="feature-image">
        <div className="features">
          <div className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4 text-white">
            What is Evie all about?
          </div>
          <div className="text-2xl tracking-tight mb-10 ">
            Here at Jamble Studios we strive to provide you with the best
            Discord Bots, weather it's being a reliable music bot or adding
            useful and fun commands to your server.
          </div>
          <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
            <div className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h5 className="text-xl font-semibold mb-2 text-shadow">
                  Lag Free Audio
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4">
                  Jamble's music player allows you to both queue and play music
                  without waiting for them to download. Jamble currently
                  supports Spotify, YouTube and SoundCloud.
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h5 className="text-xl font-semibold mb-2 text-shadow">
                  Handy utilities
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4">
                  Jamble has a range of useful utilities for moderation, such as
                  clearing channels on command, and more coming soon (were
                  mainly focusing on music atm).
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-col bg-gradient-to-br from-purple-500 to-indigo-500 text-center">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8 text-center">
                <h5 className="text-xl font-semibold mb-2 text-shadow text-center">
                  Uptime!
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4 text-center">
                  Unlike many other competitors, we never go down and if we do
                  it's usually just a 10 second update to make Jamble even more
                  easier for you server owners and more fun and easy for all.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
