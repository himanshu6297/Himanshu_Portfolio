import { Code, Zap, Target } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full Stack Developer',
      description: 'Building scalable web applications with modern frameworks and cloud technologies'
    },
    {
      icon: <Zap size={32} />,
      title: 'Cloud Architect',
      description: 'Designing containerized microservices on AWS EKS with Kubernetes orchestration'
    },
    {
      icon: <Target size={32} />,
      title: 'DevOps Engineer',
      description: 'Creating automated CI/CD pipelines with Jenkins, SonarQube, and security scanning'
    }
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate full-stack developer and cloud architect with expertise in building production-grade applications. My journey spans from mobile app development to enterprise cloud solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I combine software engineering best practices with DevOps principles to deliver scalable, secure, and maintainable systems. Each project is an opportunity to solve real-world problems and demonstrate technical excellence.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open source, and sharing knowledge with the developer community.
            </p>
            <div className="flex gap-4">
              <AnimatedCounter end={2} label="Years Experience" />
              <AnimatedCounter end={2} label="Major Projects" />
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
