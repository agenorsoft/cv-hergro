import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Dominio de metodologías y tecnologías modernas aplicadas al mundo del desarrollo</p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-header">
                  <span>React + Angular 14/17</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="95"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>JavaScript + Type Script</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="90"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>CSS + Tailwind</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="85"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>jQuery</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="88"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Backend & Database</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-header">
                  <span>Node.js</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="92"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>C# + ASP .NET Core</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="75"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>API REST/GraphQL</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="87"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>PostgreSQL/MySQL/SQL Server/MongoDB</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="85"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Redis</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="92"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Cloud & Control de versiones</h3>
            <div className="skill-items">

              <div className="skill-item">
                <div className="skill-header">
                  <span>AWS/Azure</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="82"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Docker/Kubernetes</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="75"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Git/GitHub/BitBucket/GitLab</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="90"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Metodologías + Herramientas colaborativas</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-header">
                  <span>Jira/Trello</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="77"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>G Suite/Slack/Teams</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="77"></div>
                </div>
              </div>
              <div className="skill-items">
              <div className="skill-item">
                <div className="skill-header">
                  <span>Agile/Scrum/Lean</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="85"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>CI/CD</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="80"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Refactor de código legacy + Migración a cloud + Migración de arq monolíticas a microservicios</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="77"></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
