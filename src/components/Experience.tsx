import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-subtitle">Historial comprobado de éxito en proyectos desafiantes</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2022 - Presente</div>
            <div className="timeline-content">
              <h3 className="job-title">Technical Leader + Product Owner</h3>
              <h4 className="company">Oversoft SA</h4>
              <p className="job-description">
                Lidero el desarrollo de aplicaciones empresariales críticas usando .NET, Angular, React, Node.js y AWS.
                Responsable de arquitectura técnica y mentoría del equipo de desarrollo.
              </p>
              <ul className="achievements-list">
                <li>Implementación de CI/CD</li>
                <li>Migración de arq monolíticas a microservicios</li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">React + Angular JS</span>
                <span className="tech-tag">jQuery + JS</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">ASP .NET Core</span>
                <span className="tech-tag">SQL Server</span>
                <span className="tech-tag">Docker + Kubernetes</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2018 - 2022</div>
            <div className="timeline-content">
              <h3 className="job-title">Socio fundador + Software Architect</h3>
              <h4 className="company">Agenor IT</h4>
              <p className="job-description">
                Desarrollo de aplicaciones web completas para clientes del sector financiero, comercio e industria,
                desde conceptualización hasta deployment y mantenimiento.
              </p>
              <ul className="achievements-list">
                <li>+ 8 Proyectos llave en mano</li>
                <li>Migración de arq monolíticas a microservicios</li>
                <li>Mantenimiento de aplicaciones legacy</li>
              </ul>
              <div className="tech-tags">
              <span className="tech-tag">React + Angular 14/17</span>
                <span className="tech-tag">jQuery + JS</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">ASP .NET Core</span>
                <span className="tech-tag">SQL Server</span>
                <span className="tech-tag">Docker + Kubernetes</span>
                <span className="tech-tag">Azure</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2012 - 2018</div>
            <div className="timeline-content">
              <h3 className="job-title">Especialista en sistemas de información CRM + ERP + BPM</h3>
              <h4 className="company">Banco Macro SA + Banco Superville SA + Bit SA</h4>
              <p className="job-description">
                Desarrollador + Consultor/Implementador de soluciones de CRM + ERP + BPM
              </p>
              <ul className="achievements-list">
                <li>Implementador de solución Microsoft Dynamics 365 + Power BI Data analitics</li>
                <li>Proyect Manager BPM</li>
                <li>Data analyst</li>
              </ul>
              <div className="tech-tags">
                <span className="tech-tag">IBM technologies</span>
                <span className="tech-tag">Microsoft technologies</span>
                <span className="tech-tag">SAP technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
