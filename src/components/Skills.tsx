import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Dominio de metodologías y tecnologías modernas aplicadas al mundo
            del desarrollo
          </p>
        </div>
        <section className="skills-section px-6 py-12 bg-[#f8fafc]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Frontend",
                items: [
                  "React + Angular 14/17",
                  "JavaScript + TypeScript",
                  "CSS3 + Tailwind",
                  "HTML5 / jQuery",
                ],
              },
              {
                title: "Backend & Database",
                items: [
                  "Node.js / Express",
                  "C# + ASP.NET Core",
                  "APIs REST / GraphQL",
                  "PostgreSQL / SQL Server / MySQL / MongoDB",
                  "Redis",
                ],
              },
              {
                title: "Cloud + DevOps",
                items: [
                  "AWS / Azure",
                  "Docker / Kubernetes",
                  "Git / GitHub / Bitbucket / GitLab",
                  "CI/CD",
                ],
              },
            ].map((category, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-slate-600">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "IA aplicada + Automatización",
                items: [
                  "ChatGPT / Gemini / Claude / Grok",
                  "GitHub Copilot / Copilot Workspace",
                  "Make / n8n ",
                  "Integración de APIs de IA",
                ],
              },
              {
                title: "Prototipado + Diseño UI/UX",
                items: [
                  "Adobe XD / Figma / Framer",
                  "Nerd.lat / Bolt.new / Webflow",
                  "Diseño de interfaces y flujos",
                  "Validación de MVPs",
                ],
              },
              {
                title: "Metodologías + Gestión",
                items: [
                  "Agile / Scrum / Lean",
                  "Jira / Trello / Notion",
                  "Slack / Teams / G Suite",
                  "Refactor de legacy + migración cloud / microservicios",
                ],
              },
            ].map((category, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-slate-600">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
