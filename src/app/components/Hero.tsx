"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./style/Hero.css"; 

export default function Hero() {
  return (
    <>
      <div id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              <span className="hero-greeting">Hello, I'm </span>
            </h1>

            <div
              className="hero-animation"
              aria-label="Type Animation introducing myself"
            >
              <TypeAnimation
                sequence={[
                  "Tarfeeha Hussain",
                  1000,
                  "Web Designer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>

            <div className="hero-description">
              <p>
                I'm a passionate web designer with a focus on creating beautiful
                and functional user experiences. With experience in UI/UX
                design, I specialize in crafting responsive, user-friendly
                websites that make an impact. I’m always eager to learn and take
                on new challenges in the ever-evolving world of web design.
              </p>
            </div>

            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">
                Hire Me
              </a>

              <a
                href="/path-to-your-cv.pdf"
                download="Tarfeeha_Hussain_CV"
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
