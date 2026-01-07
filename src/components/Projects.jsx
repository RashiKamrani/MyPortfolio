import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Brightland Resorts & Spa",
    tag: "Desktop Application",
    image: "/assets/hotel.jpg",
    desc: `Brightland Resorts & Spa is a hotel management system developed using Python and Tkinter. 
    It provides secure login, customer management, booking handling, and database-driven operations 
    using SQLite, enabling efficient hotel administration.`,
    images: [
      "/images/brightland1.png",
      "/images/brightland2.png",
    ],
  },
  {
    title: "RK Coffee House",
    tag: "Web Development",
    image: "/assets/coffee.jpg", // ✅ added
    desc: `RK Coffee House is a responsive café website built using Bootstrap. 
    It features a modern layout, interactive menu sections, and smooth navigation 
    to enhance customer experience and brand presence.`,
    images: [
      "/images/coffee1.png",
      "/images/coffee2.png",
    ],
  },
  {
    title: "The Balanced Bite",
    tag: "Food Tech",
    image: "/assets/bakery.jpg", // ✅ added
    desc: `The Balanced Bite is a food-tech oriented project focused on promoting 
    healthy eating habits through clean UI design and structured content presentation.`,
    images: [
      "/images/bite1.png",
      "/images/bite2.png",
    ],
  },
  {
    title: "Swasth Mind",
    tag: "Mental Health",
    image: "/assets/mind.jpg", // ✅ added
    desc: `Swasth Mind is a mental wellness and awareness platform designed to 
    promote emotional well-being, stress management, and mindful living 
    through a calming and user-centric interface.`,
    images: [
      "/images/mind1.png",
      "/images/mind2.png",
    ],
  },
  {
    title: "FarmTrace",
    tag: "Blockchain | Social Cause",
    image: "/assets/farm.jpg", // ✅ added
    desc: `FarmTrace is a blockchain-powered farm-to-fork traceability system 
    that enables real-time tracking, QR-based verification, and transparent 
    supply chain monitoring to ensure food authenticity and trust.`,
    images: [
      "/images/farmtrace1.png",
      "/images/farmtrace2.png",
      "/images/farmtrace3.png",
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <section className="projectsSection" id="projects">
      <h2 className="projectsTitle">
        <span></span> Projects
      </h2>
      <p className="projectsSubtitle">
        A curated collection of real world projects where design meets technology,
        solving meaningful problems through thoughtful solutions.
      </p>

      <div className="projectsGrid">
        {projects.map((project, index) => (
          <div
            className="projectCard"
            key={index}
            onClick={() => {
              setActiveProject(project);
              setCurrentImg(0);
            }}
          >
            {/*  ONLY ADDITION: TOP IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="projectTopImage"
            />

            {/* 👇 EXISTING CONTENT AS IT IS */}
            <h3>{project.title}</h3>
            <span>{project.tag}</span>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modalOverlay">
          <div className="modalContent">
            <button
              className="closeBtn"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

           <span className="modalTag modalTagText">{activeProject.tag}</span>

            <h2>{activeProject.title}</h2>
            <p>{activeProject.desc}</p>

            <div className="slider">
              <img
                src={activeProject.images[currentImg]}
                alt="project"
              />

              <div className="dots">
                {activeProject.images.map((_, i) => (
                  <span
                    key={i}
                    className={i === currentImg ? "dot active" : "dot"}
                    onClick={() => setCurrentImg(i)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
