import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'YelpCamp - Cloud Native Full-Stack Application',
      type: 'Personal Project',
      date: '2023 - 2024',
      location: 'Full-time Development',
      description: 'Architected and deployed a production-grade full-stack application on AWS EKS with automated CI/CD pipeline.',
      highlights: [
        'Designed and implemented RESTful APIs using Node.js & Express',
        'Built containerized microservices with Docker and Kubernetes',
        'Set up automated CI/CD pipeline with Jenkins and SonarQube',
        'Implemented security scanning with Trivy',
        'Configured AWS infrastructure (VPC, EC2, EKS, ALB)',
        'Set up CloudWatch monitoring and alerting'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Docker', 'Kubernetes', 'AWS EKS', 'AWS EC2', 'AWS VPC', 'AWS ALB', 'AWS CloudWatch', 'Jenkins', 'SonarQube', 'Trivy', 'GitHub', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Git'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Android Development Internship',
      type: 'PraxWare Technologies',
      date: 'June - July 2022',
      location: 'Ahmedabad, India',
      description: 'Developed a feature-rich Android application, gaining hands-on experience in mobile architecture and UI design.',
      highlights: [
        'Built user authentication system with validation',
        'Implemented fragment-based navigation patterns',
        'Designed responsive XML layouts for multiple screen sizes',
        'Created interactive UI components and activities',
        'Integrated REST API concepts for backend communication',
        'Mastered Android lifecycle and state management'
      ],
      technologies: ['Java', 'Android Studio', 'Android SDK', 'XML Layout Design', 'REST APIs', 'SQLite', 'Android Fragments', 'Activity Lifecycle', 'Git'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey building scalable applications and learning cutting-edge technologies
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              data-aos="fade-right"
              data-aos-delay={idx * 100}
              className="group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift"
            >
              {/* Timeline Indicator */}
              <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${exp.color}`}></div>

              <div className="p-8 pl-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.type}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className={`px-4 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${exp.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
