import profileImg from '../../assets/profile.JPG';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { totalSkills } from '../Skills/Skills';
import { projects } from '../Projects/Projects';

export const About = () => {
  const titleRef = useScrollReveal();
  const imageRef = useScrollReveal({ threshold: 0.2 });
  const textRef = useScrollReveal({ threshold: 0.2 });

  // Calcula anos de experiência desde janeiro de 2023
  const calculateYearsOfExperience = () => {
    const startDate = new Date('2023-01-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffYears);
  };

  const yearsOfExperience = calculateYearsOfExperience();
  const totalProjects = projects.length;

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div ref={titleRef} className="text-center mb-12 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Sobre </span>
              <span className="heading-gradient">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar */}
            <div ref={imageRef} className="order-2 md:order-1 scroll-reveal-left">
              <div className="relative max-w-sm mx-auto group">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 p-1 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={profileImg}
                    alt="Erick Santos"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full -z-10 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Text Content */}
            <div ref={textRef} className="order-1 md:order-2 space-y-6 scroll-reveal-right">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Sou um profissional apaixonado por tecnologia, especializado em{' '}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  ciência de dados
                </span>{' '}
                e{' '}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  desenvolvimento full stack
                </span>
                .
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Com experiência em Python, FastAPI, React e Node.js, desenvolvo
                soluções completas que vão desde a análise e processamento de
                dados até interfaces modernas e responsivas.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Meu foco está em criar aplicações que não apenas funcionam bem,
                mas que também são intuitivas, escaláveis e baseadas em dados.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {totalProjects}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projetos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {totalSkills}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Tecnologias
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {yearsOfExperience}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Anos Exp.
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
