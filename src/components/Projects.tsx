import React from 'react';

interface Project {
  name: string;
  role: string;
  date: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
  techTags: string[]; // tecnologías usadas
}

const projects: Project[] = [
  {
    name: 'URUS Project / TNT Squad',
    role: 'Sr .NET Developer',
    date: 'enero 2025 - presente',
    description: 'Líder técnico submódulo de gestión de procesos de compra y venta de vehículos',
    image: './images/TNT-Squad.png',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'Angular JS', 'jQuery','JS', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'AWS'],
  },
  {
    name: 'URUS Project / Z-Warriors Squad',
    role: 'Sr .NET Developer',
    date: 'diciembre 2023 - enero 2025',
    description: 'Líder técnico submódulo de gestión de reportes para sistema DMS (Dealer Management System)',
    image: './images/Urus.jpg',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'React JS', 'Vite', 'Type Script', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'AWS'],
  },
  {
    name: 'CleanCity Project',
    role: 'Sr .NET Developer',
    date: 'marzo 2024 - presente',
    description: 'Desarrollo de sistema de gestión multiplataforma para cooperativas y municipios',
    image: './images/CleanCity.jpg',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'Angular 17', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Azure'],
  },
  {
    name: 'MotoPartsERP Project',
    role: 'Sr .NET Developer',
    date: 'agosto 2022 - agosto 2023',
    description: 'Desarrollo de ERP para industria de motopartes',
    image: './images/MotoPartsERP.jpg',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'Angular 14', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Azure'],
  },
  {
    name: 'FedSales Project',
    role: 'Sr .NET Developer Full Stack',
    date: 'mayo 2022 - junio 2023',
    description: 'Desarrollo de sistema CRM para Federación de automovilismo',
    image: './images/FedSales.jpg',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'Angular 17', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Azure'],
  },
  {
    name: 'OptimusPress Project',
    role: 'Sr .NET Developer Full Stack',
    date: 'agosto 2020 - julio 2021',
    description: 'ERP para empresa gráfica con gestión integral',
    image: './images/OptimusPress.jpg',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'Win Forms', 'C#', 'SQL Server'],
  },
  {
    name: 'SmartControl Project',
    role: 'Sr .NET Developer Full Stack',
    date: 'agosto 2018 - febrero 2020',
    description: 'Sistema de check-in/reservas para eventos masivos',
    image: './images/SmartControl.jpg',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'ASP .NET Core', 'C#', 'SQL Server'],
  },
  {
    name: 'CRM Controller Project',
    role: 'Sr .NET Developer Full Stack',
    date: 'octubre 2018 - junio 2019',
    description: 'Sistema CRM para distribuidora mayorista de repuestos',
    image: './images/CRM Controller.jpg',
    demoLink: '#',
    codeLink: '#',
    techTags: ['.NET', 'ASP .NET', 'C#', 'SQL Server'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Soluciones innovadoras que generan impacto real</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-image">
                <img src={p.image} alt={p.name} />
              </div>

              <div className="project-content">
                <h3 className="project-title">{p.name}</h3>
                <p className="project-description">
                  <span className="role">{p.role}</span> (<span className="date">{p.date}</span>)
                </p>
                <p className="mb-4">{p.description}</p>
                <div className="project-tech mt-2 flex flex-wrap gap-2">
                  {p.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag bg-sky-100 text-sky-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
