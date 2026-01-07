function Skills() {
  return (
    <section id="skills" className="skillsSection">

      {/* MAIN HEADING */}
      <h2 className="skillsTitle">Skills</h2>
      <p className="skillsSubtitle">Technologies & tools I work with</p>

      <div className="skillsGrid">

        {/* FRONT END */}
        <div className="skillsCard">
          <h3 className="skillCategoryTitle">Frontend</h3>
          <div className="skillsItems">
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" alt="React" />
              React
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" alt="Tailwind" />
              Tailwind
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" alt="Next.js" />
              Next.js
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/greensock.svg" alt="GSAP" />
              GSAP
            </div>
          </div>
        </div>

        {/* BACKEND & DB */}
        <div className="skillsCard">
          <h3 className="skillCategoryTitle">Backend & DB</h3>
          <div className="skillsItems">
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" alt="Node.js" />
              Node.js
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" alt="MySQL" />
              MySQL
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" alt="MongoDB" />
              MongoDB
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" alt="Python" />
              Python
            </div>
          </div>
        </div>

        {/* BLOCKCHAIN (EMPTY) */}
        <div className="skillsCard emptyCard">
          <h3 className="skillCategoryTitle">Blockchain</h3>
          <div className="emptyText">Coming Soon</div>
        </div>

        {/* ML & DATA */}
        <div className="skillsCard">
          <h3 className="skillCategoryTitle">ML & Data</h3>
          <div className="skillsItems">
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg" alt="TensorFlow" />
              TensorFlow
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/numpy.svg" alt="NumPy" />
              NumPy
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pandas.svg" alt="Pandas" />
              Pandas
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" alt="Python" />
              Python
            </div>
          </div>
        </div>

        {/* PROGRAMMING */}
        <div className="skillsCard">
          <h3 className="skillCategoryTitle">Programming</h3>
          <div className="skillsItems">
            <div className="skillItem">C</div>
            <div className="skillItem">C++</div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" alt="JavaScript" />
              JavaScript
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" alt="Python" />
              Python
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="skillsCard">
          <h3 className="skillCategoryTitle">Tools</h3>
          <div className="skillsItems">
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" alt="Git" />
              Git
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" />
              GitHub
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg" alt="Postman" />
              Postman
            </div>
            <div className="skillItem">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/powerbi.svg" alt="Power BI" />
              Power BI
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
