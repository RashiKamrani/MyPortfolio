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
          <div className="duration">(Jun 2025 – Jul 2025)</div>
        </div>

        <div className="location">Lower Parel, Mumbai</div>

        <ul className="experiencePoints">
          <li>
            Integrated IoT machine data from the Poland manufacturing plant with SAP ERP orders, ensuring that real time machine data and enterprise orders could communicate smoothly without operational issues. Designed and created well structured database tables so that all incoming data was stored in a clean, organized, and reliable manner. Built aggregated data views that converted raw machine level data into meaningful insights for analysis and reporting, supporting faster and better decision making.

            In addition to this, I worked closely with large time series datasets and understood how manufacturing data is generated at scale. I gained exposure to data validation and consistency checks to ensure accuracy across systems. This experience strengthened my understanding of end to end data flow in industrial environments and provided practical insight into how backend systems support continuous, high volume IoT data streams in real world manufacturing setups.
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
          <div className="duration">(2024 – 2025)</div>
        </div>

        <div className="location">
          Thadomal Shahani Engineering College, Mumbai
        </div>

        <ul className="experiencePoints">
          <li>
          Served as a Design Executive in the Institution of Electronics and Telecommunication Engineers student committee at Thadomal Shahani Engineering College (TSEC), where I handled visual communications by designing posters, creatives, and promotional materials for technical events and workshops. Worked closely with committee members to coordinate communications, plan events, and support smooth execution while ensuring designs aligned with event objectives. Played an active role in strengthening the visual identity and overall communication strategy for student led initiatives, improving engagement and outreach across digital platforms.
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
