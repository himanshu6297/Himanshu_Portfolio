import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection({ isDark }) {
  const projects = [
    {
      title: 'YelpCamp',
      description: 'Full-stack camping review platform with user authentication, CRUD operations, and interactive maps.',
      image: '🏕️',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      links: {
        github: 'https://github.com',
        live: 'https://yelpcamp.com'
      }
    },
    {
      title: 'AgriGuard',
      description: 'AI-powered crop disease detection system using deep learning to identify plant diseases with 90%+ accuracy.',
      image: '🌾',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      links: {
        github: 'https://github.com',
        live: 'https://agriguard.com'
      }
    },
    {
      title: 'PraxWare Android App',
      description: 'Feature-rich Android mobile application with real-time data synchronization and offline capabilities.',
      image: '📱',
      technologies: ['Java', 'Android SDK', 'Firebase', 'SQLite'],
      links: {
        github: 'https://github.com'
      }
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time forecasts, location-based services, and data visualization.',
      image: '🌤️',
      technologies: ['React', 'API Integration', 'Tailwind CSS', 'JavaScript'],
      links: {
        github: 'https://github.com',
        live: 'https://weather-dashboard.com'
      }
    }
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900 py-32 transition-colors duration-300">
      <div className="section-container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Featured projects and applications I've built
          </p>
        </div>

        {/* CSS for clean card design */}
        <style>{`
          .project-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
          }
          
          .project-card.dark {
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          }
          
          .project-card:hover {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
            transform: translateY(-4px);
          }
          
          /* Clean browser window - NO 3D EFFECTS */
          .browser-frame {
            display: flex;
            flex-direction: column;
            background: #f3f3f3;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
            height: 100%;
          }
          
          .browser-frame.dark {
            background: #1a1a1a;
            border-color: #333;
          }
          
          /* Browser header with traffic lights */
          .browser-header {
            background: linear-gradient(to bottom, #f5f5f5, #ececec);
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid #d4d4d4;
          }
          
          .browser-header.dark {
            background: linear-gradient(to bottom, #262626, #1f1f1f);
            border-bottom-color: #333;
          }
          
          /* Traffic lights */
          .traffic-lights {
            display: flex;
            gap: 8px;
          }
          
          .traffic-light {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
          }
          
          .traffic-light.red {
            background: #ff5f56;
          }
          
          .traffic-light.yellow {
            background: #ffbd2e;
          }
          
          .traffic-light.green {
            background: #27c93f;
          }
          
          /* Browser content area */
          .browser-content {
            flex: 1;
            background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          
          .browser-content.dark {
            background: linear-gradient(135deg, #222 0%, #1a1a1a 100%);
          }
          
          .browser-preview {
            font-size: 3.5rem;
            opacity: 0.9;
            transition: all 0.3s ease;
          }
          
          .project-card:hover .browser-preview {
            transform: scale(1.05);
            opacity: 1;
          }
        `}</style>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card ${isDark ? 'dark' : ''}`}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="700"
            >
              {/* Project Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                {idx % 2 === 0 ? (
                  <>
                    {/* Left: Text Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full border border-blue-200 dark:border-blue-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 flex-wrap">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors duration-300"
                          >
                            <Github size={16} />
                            GitHub
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-blue-600 dark:text-blue-300 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-300"
                          >
                            <ExternalLink size={16} />
                            View Project
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Browser Preview */}
                    <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-800/50 border-l border-gray-200 dark:border-gray-700">
                      <div className={`browser-frame ${isDark ? 'dark' : ''}`} style={{ minHeight: '320px' }}>
                        <div className={`browser-header ${isDark ? 'dark' : ''}`}>
                          <div className="traffic-lights">
                            <div className="traffic-light red"></div>
                            <div className="traffic-light yellow"></div>
                            <div className="traffic-light green"></div>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            {project.links.live || 'example.com'}
                          </span>
                        </div>
                        <div className={`browser-content ${isDark ? 'dark' : ''}`}>
                          <div className="browser-preview">{project.image}</div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: Browser Preview */}
                    <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-700">
                      <div className={`browser-frame ${isDark ? 'dark' : ''}`} style={{ minHeight: '320px' }}>
                        <div className={`browser-header ${isDark ? 'dark' : ''}`}>
                          <div className="traffic-lights">
                            <div className="traffic-light red"></div>
                            <div className="traffic-light yellow"></div>
                            <div className="traffic-light green"></div>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            {project.links.live || 'example.com'}
                          </span>
                        </div>
                        <div className={`browser-content ${isDark ? 'dark' : ''}`}>
                          <div className="browser-preview">{project.image}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full border border-blue-200 dark:border-blue-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 flex-wrap">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors duration-300"
                          >
                            <Github size={16} />
                            GitHub
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-blue-600 dark:text-blue-300 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-300"
                          >
                            <ExternalLink size={16} />
                            View Project
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
