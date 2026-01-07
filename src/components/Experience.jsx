function Experience() {
  return (
    <section id="experience" className="experienceSection">

      {/* HEADING */}
      <h2 className="experienceTitle">Experience</h2>
      <p className="experienceSubtitle">
        Professional experience & leadership roles
      </p>

      {/* ===== EPL EXPERIENCE ===== */}
      <div className="experienceCard">

        <div className="experienceHeader">
          <div>
            <h3>EPL Limited</h3>
            <span className="role">IT Backend Intern</span>
          </div>
          <div className="duration">Jun 2025 – Jul 2025</div>
        </div>

        <div className="location">Lower Parel, Mumbai</div>

        <ul className="experiencePoints">
          <li>
            Integrated IoT machine data from the Poland manufacturing plant
            with SAP ERP orders.
          </li>
          <li>
            Designed and created database tables for structured backend storage.
          </li>
          <li>
            Built aggregated data views for analysis and reporting.
          </li>
          <li>
            Gained hands-on experience in IoT data streaming and backend systems.
          </li>
        </ul>

        <div className="experienceTags">
          <span>IoT</span>
          <span>SAP ERP</span>
          <span>SQL</span>
          <span>Backend</span>
          <span>Data Analytics</span>
        </div>

      </div>

      {/* ===== IETE EXPERIENCE ===== */}
      <div className="experienceCard">

        <div className="experienceHeader">
          <div>
            <h3>IETE TSEC</h3>
            <span className="role">Design Executive</span>
          </div>
          <div className="duration">2024 – 2025</div>
        </div>

        <div className="location">
          Thadomal Shahani Engineering College, Mumbai
        </div>

        <ul className="experiencePoints">
          <li>
            Served as a Design Executive in the Institution of Electronics and
            Telecommunication Engineers (IETE) student committee.
          </li>
          <li>
            Designed posters, creatives, and promotional materials
            for technical events and workshops.
          </li>
          <li>
            Collaborated with committee members to plan and organize events.
          </li>
          <li>
            Contributed to improving visual identity and engagement
            for student-led initiatives.
          </li>
        </ul>

        <div className="experienceTags">
          <span>Graphic Design</span>
          <span>Canva</span>
          <span>UI/UX</span>
          <span>Teamwork</span>
          <span>Leadership</span>
        </div>

      </div>

    </section>
  );
}

export default Experience;
