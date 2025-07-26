import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="hero bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20"
    >
      <div className="hero-container max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Texto */}
        <div className="hero-text flex-1">
          <h1 className="hero-title text-4xl lg:text-5xl font-bold mb-4">
            Hernán Grosso
            <span className="block text-xl lg:text-2xl font-medium mt-2">
              Full Stack Developer + Software Architect
            </span>
          </h1>
          <p className="hero-description text-lg mb-8">
            Transformo ideas en soluciones digitales escalables. +12 años creando e implementando aplicaciones robustas
            que impulsan el crecimiento empresarial y mejoran la experiencia del usuario.
          </p>
          <div className="hero-stats flex flex-col sm:flex-row gap-6 mb-8">
            <div className="stat text-center">
              <span className="stat-number text-3xl font-bold">10+</span>
              <span className="stat-label block mt-1">Proyectos Completados</span>
            </div>
            <div className="stat text-center">
              <span className="stat-number text-3xl font-bold">12+</span>
              <span className="stat-label block mt-1">Años de Experiencia</span>
            </div>
            <div className="stat text-center">
              <span className="stat-number text-3xl font-bold">15+</span>
              <span className="stat-label block mt-1">Tecnologías Dominadas</span>
            </div>
          </div>
          <div className="hero-buttons flex gap-4">
            <a href="#contact" className="btn btn-primary">
              Contactar Ahora
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>

        {/* Imagen sin recuadro */}
        <div className="hero-image flex-shrink-0 text-center">
          <img
            src="/src/images/foto-perfil.jpg"
            alt="Hernán Grosso"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-xl object-cover mx-auto"
          />
          <div className="mt-3 flex items-center justify-center text-sm text-green-400">
            <span className="status-dot bg-green-400 inline-block w-2 h-2 rounded-full mr-2"></span>
            Disponible para proyectos
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
