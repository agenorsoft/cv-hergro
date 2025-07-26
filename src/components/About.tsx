import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Perfil Profesional</h2>
          <p className="section-subtitle">Pasión por la tecnología y el desarrollo de soluciones innovadoras</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
            Me dedico al desarrollo de software de alta calidad y tengo un emprendimiento tecnológico con más de 8 proyectos relacionados con sistemas de gestión empresarial. 
            Me apasiona crear soluciones innovadoras que aporten valor a los clientes y a la sociedad. 
            Actualmente, lidero equipos técnicos en Oversoft SA y soy co-fundador de Agenor IT, donde desarrollo aplicaciones web utilizando tecnologías como .NET, Angular/React y AWS/Azure.
            </p>
            <div className="achievements">
              <div className="achievement">
                <div className="achievement-icon">🚀</div>
                <div className="achievement-text">
                  <h3>Performance</h3>
                  <p>Especialista en optimización de aplicaciones web</p>
                </div>
              </div>
              <div className="achievement">
                <div className="achievement-icon">👥</div>
                <div className="achievement-text">
                  <h3>Liderazgo</h3>
                  <p>Amplia experiencia en liderazgo de equipos multidisciplinarios</p>
                </div>
              </div>
              <div className="achievement">
                <div className="achievement-icon">💡</div>
                <div className="achievement-text">
                  <h3>Innovación</h3>
                  <p>Implementación de arquitecturas enfocadas en la escalabilidad y mantenibilidad de bajo costo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-contact">
            <h3>Información de Contacto</h3>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hergro1987@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+54 353 409 7246</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Villa María, Córdoba, Argentina</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🔗</span>
                <span>linkedin.com/in/hernangrosso1987/</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
