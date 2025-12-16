import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { Project } from '../../types';

/**
 * Lista de projetos do portfólio
 * TODO: Substituir com dados reais e adicionar mais projetos
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'ControlHS - Dashboard',
    description:
      'Sistema completo de controle e gestão com dashboard intuitivo, visualizações de dados em tempo real e relatórios personalizados.',
    image: '/projects/controlhs-dashboard-web.png',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    featured: true,
  },
  {
    id: '2',
    title: 'ControlHS - Inventário',
    description:
      'Módulo de controle de inventário com rastreamento de estoque, alertas automáticos e gerenciamento de produtos.',
    image: '/projects/controlhs-inventário-web.png',
    tags: ['React', 'Python', 'FastAPI'],
  },
  {
    id: '3',
    title: 'ControlHS - Transferências',
    description:
      'Sistema de gerenciamento de transferências entre locais, com histórico completo e validações automáticas.',
    image: '/projects/controlhs-trasnferencias-web.png',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: '4',
    title: 'ControlHS - Baixas',
    description:
      'Módulo para controle de baixas de estoque, com aprovações em múltiplos níveis e auditoria completa.',
    image: '/projects/controlhs-baixas-web.png',
    tags: ['React', 'FastAPI', 'Python'],
  },
];

export const Projects = () => {
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Meus </span>
            <span className="heading-gradient">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-200 dark:border-gray-800"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                      Destaque
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>Código</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Mais projetos em breve...
          </p>
        </div>
      </div>
    </section>
  );
};
