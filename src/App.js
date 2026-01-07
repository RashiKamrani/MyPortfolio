import "./App.css";
import Me from "./me.png";
import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {

  const [theme, setTheme] = useState("dark");

  // CUSTOM CURSOR EFFECT
  useEffect(() => {
    const cursor = document.querySelector(".customCursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>

      {/* NAVBAR */}
      <div className="navWrapper">
        <nav className="navbar">

          {/* THEME TOGGLE */}
          <span
            className="logo"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </span>

          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* KNOW MORE */}
          <div className="knowMore">
            <span className="knowText">Know More</span>

            <div className="knowIcons">
              <a href="https://github.com/RashiKamrani" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="github" />
              </a>
              <a href="https://www.instagram.com/rashi.kamrani" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="instagram" />
              </a>
              <a href="https://www.linkedin.com/in/rashikamrani" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="linkedin" />
              </a>
              <a href="/Rashi_Kamrani_Resume.pdf" download>
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/file-earmark-text.svg"
                  alt="Download Resume"
                  width="28"
                />
              </a>


            </div>
          </div>

        </nav>
      </div>

      {/* HERO */}
      <div className="heroContainer">
        <div className="heroCard">
          <div className="heroText fadeIn">
            <h1>
              Hi, I am <span>Rashi Kamrani</span>
            </h1>
            <h2 className="success">Software Engineer</h2>


            <p>
              A passionate software engineer who enjoys building clean, scalable, and
              efficient applications with a strong focus on problem solving, system
              design, and user centric digital experiences.
            </p>
            <a href="/Rashi_Kamrani_Resume.pdf" download>
              <button className="resumeBtn">
                Download Resume
              </button>
            </a>

          </div>

          <div className="heroImg float">
            <img src={Me} alt="Rashi" />
          </div>
        </div>
      </div>

      <Projects />

      <Experience />
      <Skills />
      <About />
      <Contact />


      <footer>© 2026 | Designed by Rashi</footer>
      <div className="customCursor"></div>
    </div>
  );
}

export default App;
