import { Briefcase, Calendar, MapPin, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProfessionalExperienceSection() {
  // Combine internship experience with projects
  const experiences = [
    {
      id: 1,
      title: 'YelpCamp',
      subtitle: 'Cloud Native Full-Stack Web Application',
      type: 'Personal Capstone Project',
      duration: 'Jan 2025 - Apr 2025',
      location: 'Full-time Development',
      description: 'A production-grade, cloud-native full-stack web application designed to simulate real-world deployment practices.',
      highlights: [
        'Designed and implemented RESTful APIs for 15+ endpoints using Node.js and Express.js',
        'Built containerized microservices with Docker and Kubernetes on AWS EKS',
        'Set up automated CI/CD pipeline with Jenkins, SonarQube, and Trivy security scanning',
        'Configured AWS infrastructure (VPC, EC2, EKS, ALB, CloudWatch)',
        'Implemented zero-downtime deployments with rolling updates',
        'Enabled auto-scaling capabilities (2-10 replicas) on Kubernetes cluster'
      ],
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB Atlas',
        'Docker', 'Kubernetes', 'AWS VPC', 'AWS EC2', 'AWS EKS', 'AWS ALB',
        'AWS CloudWatch', 'Jenkins', 'SonarQube', 'Trivy', 'GitHub', 'Git'
      ],
      color: 'from-blue-500 to-cyan-500',
      image: '🏕️'
    },
    {
      id: 2,
      title: 'AgriGuard',
      subtitle: 'AI-Powered Leaf Disease Detection System with Chatbot',
      type: 'Capstone Project (In Progress)',
      duration: 'Jan 2026 - Apr 2026',
      location: 'AI/ML Development',
      description: 'An intelligent crop disease detection system using deep learning computer vision to analyze leaf images and classify plant diseases.',
      highlights: [
        'Developed CNN-based plant disease classifier achieving ≥90% F1-score',
        'Implemented transfer learning for improved model accuracy with limited data',
        'Built end-to-end AI pipeline from data preprocessing to model serving',
        'Designed TensorFlow Lite optimized model for edge deployment on mobile devices',
        'Integrated FastAPI backend for real-time disease prediction',
        'Developed conversational chatbot for treatment recommendations'
      ],
      technologies: [
        'Python', 'TensorFlow', 'TensorFlow Lite', 'CNN', 'Transfer Learning',
        'Computer Vision', 'Image Processing', 'tf.data', 'FastAPI',
        'TensorFlow Serving', 'Deep Learning', 'PlantVillage Dataset', 'Git', 'Jupyter'
      ],
      color: 'from-green-500 to-emerald-500',
      image: '🌾'
    },
    {
      id: 3,
      title: 'Android Mobile Application',
      subtitle: 'Internship Project - PraxWare Technologies',
      type: 'Professional Internship',
      duration: 'June - July 2022',
      location: 'Ahmedabad, India',
      description: 'Developed a feature-rich Android application, gaining hands-on experience in mobile architecture and UI design.',
      highlights: [
        'Built user authentication system with validation and secure storage',
        'Implemented fragment-based navigation patterns for modular app structure',
        'Designed responsive XML layouts for multiple screen sizes',
        'Created interactive UI components and managed activity lifecycle',
        'Integrated REST API concepts for backend communication',
        'Mastered Android lifecycle management and state preservation'
      ],
      technologies: [
        'Java', 'Android Studio', 'Android SDK', 'XML Layout Design',
        'REST APIs', 'SQLite', 'Android Fragments', 'Activity Lifecycle', 'Git'
      ],
      color: 'from-orange-500 to-red-500',
      image: '📱'
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My journey building scalable applications, from cloud-native full-stack systems to AI-powered solutions and mobile development
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
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{exp.image}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                      {exp.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.type}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Briefcase size={20} /> Key Achievements
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-600 dark:to-gray-600 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
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
