import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
      {/* Project Header */}
      <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
        <span className="text-6xl">{project.image}</span>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
          <p className="text-primary-600 font-semibold">{project.subtitle}</p>
          {project.company && <p className="text-gray-600 text-sm">{project.company}</p>}
          {project.internshipDates && <p className="text-gray-600 text-sm">{project.internshipDates}</p>}
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Github size={18} /> Code
          </a>
          {/* You can add a project details link if needed */}
        </div>
      </div>
    </div>
  );
}
