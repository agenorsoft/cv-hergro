import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trabajemos Juntos</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto desafiante? Hablemos sobre cómo puedo ayudarte
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>¿Listo para empezar?</h3>
            <p>
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades full-time. 
              Siempre abierto a discutir ideas innovadoras y desafíos técnicos complejos.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-text">
                  <h4>Email</h4>
                  <p>hergro1987@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-text">
                  <h4>Teléfono</h4>
                  <p>+54 353 409 7246</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">🌐</div>
                <div className="method-text">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/hernangrosso1987/</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form id="contactForm" className="form">
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Tu email" required />
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Asunto" required />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={6}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <span>Enviar Mensaje</span>
                <span className="btn-loading" style={{ display: 'none' }}>Enviando...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
