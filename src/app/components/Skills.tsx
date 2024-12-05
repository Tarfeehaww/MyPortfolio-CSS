import "./style/Skills.css"
export default function Skills() {
    return (
      <div id="skills" className="skills-section">
        <div className="skills-content">
          <h2 className="skills-heading">Technologies I Work With</h2>
          <p className="skills-description">Below are the technologies I have experience with:</p>
  
          <div className="skills-list">
            <div className="skill">
              <p className="skill-title">HTML</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "60%" }}></div>
              </div>
              <p className="progress-percentage">60%</p>
            </div>
  
            <div className="skill">
              <p className="skill-title">CSS</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "50%" }}></div>
              </div>
              <p className="progress-percentage">50%</p>
            </div>
  
            <div className="skill">
              <p className="skill-title">TypeScript</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "40%" }}></div>
              </div>
              <p className="progress-percentage">40%</p>
            </div>
  
            <div className="skill">
              <p className="skill-title">Next.js</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "50%" }}></div>
              </div>
              <p className="progress-percentage">50%</p>
            </div>
  
            <div className="skill">
              <p className="skill-title">Tailwind CSS</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "45%" }}></div>
              </div>
              <p className="progress-percentage">45%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  