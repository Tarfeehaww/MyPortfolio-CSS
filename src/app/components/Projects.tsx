import React from "react";
import "./style/Projects.css"; 

export default function Project() {
  return (
    <section className="project-section">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <div id="projects" className="project-container">
        <div className="project-card">
          <img
            className="project-image"
            src="/images/countdown timer.jpg"
            alt="Countdown Timer"
          />
          <div className="project-content">
            <h2>Project: 01</h2>
            <h1>Countdown Timer</h1>
            <p>
              A countdown timer in Next.js is a dynamic component that displays
              the time remaining until a specific event, updating in real-time
              using React hooks. It's perfect for adding interactivity to your
              portfolio for events or launches.
            </p>
            <a href="#" className="project-link">
              Learn More
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-image"
            src="/images/Static.JPG"
            alt="Static Resume Builder"
          />
          <div className="project-content">
            <h2>Project: 02</h2>
            <h1>Static Resume Builder</h1>
            <p>
              A simple resume builder app created using HTML and CSS. This
              project demonstrates the use of static HTML and CSS to create a
              clean and user-friendly resume layout.
            </p>
            <a href="#" className="project-link">
              Learn More
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-image"
            src="/images/Dynamic.JPG"
            alt="Dynamic Resume Builder"
          />
          <div className="project-content">
            <h2>Project: 03</h2>
            <h1>Dynamic Resume Builder</h1>
            <p>
              A dynamic resume builder app built with HTML, CSS, and JavaScript,
              allowing users to create and edit resumes with a modern and
              interactive interface.
            </p>
            <a href="#" className="project-link">
              Learn More
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-image"
            src="/images/Editable.JPG"
            alt="Editable Resume Builder"
          />
          <div className="project-content">
            <h2>Project: 04</h2>
            <h1>Editable Resume Builder</h1>
            <p>
              A resume builder with editable features using HTML, CSS, and
              JavaScript. This project allows users to dynamically edit and
              generate their resume.
            </p>
            <a href="#" className="project-link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
