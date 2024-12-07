import React from "react";
import Image from "next/image";
import "./style/About.css"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
       
        <div className="about-text">
          <h1 className="about-title">About Me</h1>
          <p className="about-paragraph">
            Hi, I&apos;m <span className="highlight">Tarfeeha Hussain</span>, a passionate beginner web developer exploring the exciting world of coding and development. 
            I’m currently learning technologies like <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, 
            <span className="highlight">TypeScript</span>, and <span className="highlight">Next.js</span>. 
            Every day, I aim to build beautiful and functional web applications while honing my skills.
          </p>
          <p className="about-paragraph">
            I&apos;m a curious problem-solver, excited to learn more about web design, interactive user experiences, and 
            the magic behind the internet. This is just the beginning of my journey, and I&apos;m thrilled for what&apos;s ahead!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
