import { useState, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Brightland Resorts & Spa",
    tag: "Desktop Application",
    image: "/assets/hotel.jpg",
    desc: `Brightland Resorts & Spa began as a simple academic idea and gradually evolved into a fully functional desktop based hotel management system built using Python and Tkinter. The project was designed to mirror real world hotel workflows by bringing together secure user authentication, customer information management, room booking and allocation, and report generation within a single application. SQLite was used as the backend database to ensure structured data storage and reliable record handling. With interactive data views for searching, updating, and monitoring customer and booking records, the system focuses on making day to day hotel operations efficient, organized, and easy to manage while reflecting practical problem solving through software development.`,
    images: [
      "/images/h1.jpg",
      "/images/h2.jpg",
      "/images/h3.jpg",
      "/images/h4.jpg",
      "/images/h5.jpg",
      "/images/h6.jpg",
      "/images/h7.jpg",
    ],
  },
  
  {
    title: "The Balanced Bite",
    tag: "Food Tech",
    image: "/assets/bakery.jpg",
    desc: `The Balanced Bite began as a concept to address the growing demand for clean, nutritious, and accessible food options, inspired by how challenging it can be to find genuinely healthy snacks that are transparent in ingredients and practical for everyday consumption. The project focuses on a health conscious bakery model centered around gut friendly and minimally processed products.

Shaped through research into consumer behavior and gaps in existing food offerings, the platform was designed to support both individual customers and corporate or event based requirements, giving the concept scalability. A functional prototype was built to clearly present product details such as ingredients, calorie information, and nutritional value, enabling informed and mindful food choices.

An integral part of the project is an admin dashboard that enables efficient management and monitoring of operations. It displays key metrics including revenue, orders, products, and customer data through dynamic summary cards and visual insights such as weekly revenue trends and category wise distribution charts. Developed using HTML, CSS, JavaScript, MySQL, and Express, the project demonstrates how clean design, full stack development, and business logic can come together to create a practical, real world digital solution.`,
    images: [
      "/images/b1.png",
      "/images/b2.png",
      "/images/b3.png",
      "/images/b4.png",
      "/images/b5.png",
      "/images/b6.png",
      "/images/b7.png",
      "/images/b8.png",
      "/images/b9.png",
      "/images/b10.png",
    ],
  },
  {
    title: "Swasth Mind",
    tag: "Mental Health",
    image: "/assets/mind.jpg",
    desc: `Swasth Mind is a mental wellness and awareness platform designed to promote emotional well being, stress management, and mindful living through a calm, user centric digital experience. The name Swasth Mind, written as स्वस्थमन in Hindi, translates to “healthy mind” and reflects the core vision of encouraging balance, self awareness, and mental health in everyday life.

The platform focuses on creating a safe and approachable space where users can explore mental wellness concepts without feeling overwhelmed. Emphasis was placed on clean visuals, soothing color choices, and intuitive navigation to ensure the interface feels supportive and easy to use. The content and layout are designed to encourage mindfulness, emotional clarity, and positive mental habits, making the experience both engaging and comforting.

Built using HTML, CSS, JavaScript, and ReactJS, Swasth Mind integrates smooth interactions and a responsive structure to work seamlessly across devices. This project highlights the importance of thoughtful UI design in sensitive domains like mental health, while also demonstrating strong front end development skills and an understanding of how technology can be used to support well being in a meaningful way.`,
    images: [
      "/images/m1.png",
      "/images/m2.png",
      "/images/m3.png",
      "/images/m4.png",
      "/images/m5.png",
      "/images/m6.png",
      "/images/m7.png",
      "/images/m8.png",
      "/images/m9.png",
      "/images/m10.png",
    ],
  },
  {
    title: "FarmTrace",
    tag: "Blockchain | Social Cause",
    image: "/assets/farm.jpg",
    desc: `FarmTrace is a technology driven traceability platform built during a hackathon to address transparency and trust challenges within the agricultural supply chain in India. The solution focuses on enabling end to end farm to fork tracking through secure, real time data access and QR based verification. It supports efficient monitoring of produce movement, transportation stages, and food safety checkpoints, ensuring reliable information throughout the supply chain.

The platform features role based dashboards designed for farmers, distributors, retailers, and regulatory authorities, allowing each stakeholder to access relevant insights quickly. By simplifying compliance requirements and presenting clear supply chain data, FarmTrace enhances decision making and builds consumer trust. Developed within the fast paced environment of a hackathon, this project demonstrates the ability to quickly translate real world problems into practical, user centric solutions using technology driven transparency and operational efficiency.`,
    images: [
      "/images/f1.png",
      "/images/f2.png",
      "/images/f3.png",
      "/images/f4.png",
      "/images/f5.png",
      "/images/f6.png",
      "/images/f7.png",
      "/images/f8.png",
      "/images/f9.png",
      "/images/f10.png",
      "/images/f11.png",
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentImg((prev) =>
          (prev + 1) % activeProject.images.length
        );
      }

      if (e.key === "ArrowLeft") {
        setCurrentImg((prev) =>
          (prev - 1 + activeProject.images.length) %
          activeProject.images.length
        );
      }

      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <section className="projectsSection" id="projects">
      <h2 className="projectsTitle">Projects</h2>

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
            <img
              src={project.image}
              alt={project.title}
              className="projectTopImage"
              onError={(e) => {
                e.target.src = "/assets/fallback.jpg";
              }}
            />
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

            <span className="modalTag">{activeProject.tag}</span>

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
                    tabIndex={0}
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
