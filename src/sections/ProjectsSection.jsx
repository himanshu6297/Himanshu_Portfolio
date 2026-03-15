import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of my most significant work spanning full-stack development, cloud architecture, and mobile applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={project.id} data-aos="fade-up" data-aos-delay={idx * 100}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
