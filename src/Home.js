import "./bootstrap.min.css";
import "./bootstrap4.css";
// import "./index.css";
//import "./now-ui-kit.css";
import "./App.css";

import { darkWave } from "./darkWave";
import ReactRoundedImage from "react-rounded-image";
import Leader from "./assets/leaderboard.png";
import SS from "./assets/serverstats.png";
import ReactEmbedGist from "react-embed-gist";

function Home() {
  return (
    <div>
      <div class="grid justify-items-stretch ...">
        <div class="justify-self-center ...">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 text-white">
            It's time to use Evie™ in your Discord server.
          </h1>
          <div class="float-right">
            <ReactRoundedImage
              image={Leader}
              roundedColor="#7289da"
              imageWidth="500"
              imageHeight="500"
              roundedSize="13"
              hoverColor="#FFFFFF"
              borderRadius="50"
            />
          </div>

          <br></br>

          <div class="justify-self-center ...">
            <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-center">
              Evie™ is a feature-rich, easy to use Discord bot built to deliver
              the best experience of a bot on Discord!
            </p>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n        #GFG {\n            text-decoration: none;\n        }\n    ",
              }}
            />
            <div class="grid justify-items-stretch ...">
              <div class="justify-self-center ...">
                <div class="hover: transition duration-500 hover:scale-125">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=807543126424158238&permissions=518855707712&scope=bot%20applications.commands"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header">
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
          <div className="text-2xl tracking-tight mb-10 text-center">
            <ReactEmbedGist gist="twisttaan/5052ea469cfbb86fe4643bf69b8f4e45" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
