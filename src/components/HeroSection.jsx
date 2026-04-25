import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center pt-20 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full">
            <span className="text-primary-600 dark:text-primary-300 font-semibold text-sm">Welcome to my portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-slide-up">
            Full Stack Developer & Cloud Architect
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I design and build scalable, cloud-native applications using modern technologies. 
            From containerized microservices to mobile solutions, I bring ideas to life with code, 
            infrastructure, and DevOps best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              View My Work <ArrowRight size={20} />
            </ScrollLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/himanshu6297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-patel-hp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:himanshupatel4679@gmail.com"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
