import { Code, Zap, Target } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full Stack Developer',
      description: 'Building scalable, responsive web applications using modern frontend and backend technologies.'
    },
    {
      icon: <Zap size={32} />,
      title: 'AI & Cloud Developer',
      description: 'Developing AI-powered applications and deploying them on cloud platforms using containerized environments.'
    },
    {
      icon: <Target size={32} />,
      title: 'DevOps & Automation',
      description: 'Implementing CI/CD pipelines, containerization, and automation to streamline development and deployment.'
    }
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a full-stack developer focused on building intelligent, real-world applications by combining software development, cloud technologies, and artificial intelligence. I specialize in developing scalable systems across frontend, backend, and cloud environments.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
             I have hands-on experience with React.js, Node.js, Docker, Kubernetes, and AWS, and I enjoy building production-ready applications with clean architecture and efficient deployment workflows. Recently, I developed an AI-powered plant disease detection system with an integrated chatbot, handling everything from model integration to full-stack deployment.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm particularly interested in AI-driven solutions and system design, and I continuously work on improving my skills in cloud computing, DevOps, and modern application architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
              <AnimatedCounter end={1} label="Years Experience" />
              <AnimatedCounter end={3} label="Major Projects" />
              <AnimatedCounter end={20} label="Technologies" />
            </div>
          </div>

          {/* Right Highlights */}
          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                data-aos="flip-left"
                data-aos-delay={idx * 100}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border-2 border-blue-100 dark:border-gray-600 hover:border-primary-400 hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary-600 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
