import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectsSection({ isDark }) {
  return (
    <section
      id="projects"
      className={`relative min-h-screen overflow-hidden py-20 md:py-32 transition-colors duration-300 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.25),_transparent_30%),linear-gradient(180deg,_#0a0f1f_0%,_#050b18_60%,_#02060f_100%)]'
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-white'
      }`}
    >
      {/* OVERLAY */}
      <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/20'}`}></div>

      {/* ALL CONTENT MUST BE INSIDE THIS */}
      <div className="relative z-10 section-container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 px-4" data-aos="fade-up">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Projects
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Featured projects and applications I've built
          </p>
        </div>

        {/* CSS for clean card design */}
        <style>{`
          .project-card {
            background: transparent;
            color: ${isDark ? 'white' : '#1f2937'};
            border-radius: 0;
            overflow: visible;
            box-shadow: none;
            transition: all 0.3s ease;
            position: relative;
            min-height: 300px;
          }

          .project-card:hover {
            box-shadow: none;
            transform: none;
          }

          .project-card-grid {
            position: relative;
            padding-right: 0;
          }

          .project-text-content {
            position: relative;
            z-index: 10;
          }

          /* Odd cards (1st, 3rd, 5th...) - text left, half width */
          .project-card:nth-child(odd) .project-text-content {
            width: 100%;
            margin-left: 0;
            padding-right: 0;
          }

          /* Even cards (2nd, 4th, 6th...) - text right, half width */
          .project-card:nth-child(even) .project-text-content {
            width: 100%;
            margin-left: auto;
            text-align: right;
            padding-left: 0;
          }

          @media (min-width: 1024px) {
            .project-card:nth-child(odd) .project-text-content {
              width: 50%;
            }
            .project-card:nth-child(even) .project-text-content {
              width: 50%;
            }
          }

          .project-image-container {
            position: absolute;
            overflow: hidden;
            transition: transform 0.5s ease, filter 0.5s ease;
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
            bottom: 0;
          }

          /* Even cards (1st, 3rd, 5th...) - bottom right */
          .project-card:nth-child(odd) .project-image-container {
            right: 0;
          }

          /* Odd cards (2nd, 4th, 6th...) - bottom left */
          .project-card:nth-child(even) .project-image-container {
            left: 0;
          }

          .project-image-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 0;
            border: none;
            box-shadow: none;
            overflow: hidden;
          }

          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .project-card:hover .project-image-container {
            transform: scale(1.05) rotate(-3deg);
            filter: brightness(1.1);
          }

          /* Even cards (YelpCamp) - tilt right on hover */
          .project-card:nth-child(even):hover .project-image-container {
            transform: scale(1.05) rotate(3deg);
          }

          @media (max-width: 768px) {
            .project-card {
              min-height: 400px;
            }
            .project-image-container {
              width: 100% !important;
              height: 200px;
            }
          }
        `}</style>

        {/* Projects List */}
        <div className="space-y-12 px-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              {/* Horizontal Layout: Text Left, Image at Corner */}
              <div className="project-card-grid relative w-full">
                {/* Left: Text Content */}
                <div className="project-text-content w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm sm:text-base lg:text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-start lg:justify-start even:lg:justify-end">
                    {project.technologies.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className={`inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full border transition-colors ${
                          isDark 
                            ? 'text-blue-300 bg-blue-900/40 border-blue-700 hover:bg-blue-800/60'
                            : 'text-blue-700 bg-blue-100 border-blue-300 hover:bg-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className={`inline-block px-3 py-1 text-xs sm:text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 justify-start lg:justify-start even:lg:justify-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-300 ${
                        isDark
                          ? 'text-white bg-blue-600 hover:bg-blue-700'
                          : 'text-white bg-blue-500 hover:bg-blue-600'
                      }`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Image Container - Positioned at Corner */}
                <div className="project-image-container w-2/5 h-48 sm:h-56 lg:h-64">
                  {project.image.match(/[📱🏕️🌾🤖🎓💼]/) ? (
                    <div className="w-full h-full flex items-center justify-center text-6xl sm:text-8xl">
                      {project.image}
                    </div>
                  ) : (
                    <div className="project-image-wrapper h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
