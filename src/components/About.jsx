import Me2 from "../me2.jpeg";

function About() {
  return (
    <section id="about" className="aboutSection">
      <h2 className="aboutTitle">About Me</h2>
      <div className="aboutWrapper bigAbout">

        {/* LEFT IMAGE CARD */}
        <div className="aboutImageCard">
          <img src={Me2} alt="Rashi Kamrani" />

          <div className="aboutSocials">
            <a href="https://github.com/RashiKamrani" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="github" />
            </a>

            <a href="https://www.linkedin.com/in/rashikamrani" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="linkedin" />
            </a>

            
            <a href="/resume.pdf" download>
              <img
                src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/file-earmark-text.svg"
                alt="resume"
              />
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutContent">
          <h2>Crafting Ideas Into Impact</h2>

          <p>
            I am someone who believes that learning never truly stops. Beyond
            writing code and building projects, I enjoy exploring ideas that
            challenge my thinking and help me grow both technically and
            personally. Curiosity drives me to understand how things work and
            how they can be improved.
          </p>

          <p>
            I value clarity, collaboration, and consistency in everything I do.
            Whether working on a technical problem or contributing to a team
            discussion, I focus on creating solutions that are practical,
            thoughtful, and impactful. I enjoy environments where ideas are
            shared openly and growth is encouraged.
          </p>

          <p>
            Outside of development, I enjoy reflecting, learning from
            experiences, and continuously improving my skills. These habits
            shape how I approach challenges and help me stay grounded while
            building meaningful digital solutions.
          </p>

          <p className="aboutQuote">
            “Growth begins when curiosity meets consistency.”
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
