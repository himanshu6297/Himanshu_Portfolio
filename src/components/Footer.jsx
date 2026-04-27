import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 section transition-colors duration-300">
      <div className="section-container max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/icon.png" alt="Himanshu Patel" className="w-8 h-8 rounded-lg object-cover" />
              <h3 className="text-lg font-bold text-white">Himanshu Patel</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building scalable cloud applications and crafting digital solutions with modern technologies.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a href="mailto:himanshupatel4679@gmail.com" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Mail size={28} className="text-white flex-shrink-0" /> 
                <span className="break-all">himanshupatel4679@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={28} className="text-gray-400 flex-shrink-0" /> 
                <span>Saskatoon, Canada</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/himanshu6297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-125 active:scale-95"
                title="GitHub"
              >
                <Github size={32} className="text-white" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-patel-hp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-125 active:scale-95"
                title="LinkedIn"
              >
                <Linkedin size={32} className="text-white" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:himanshupatel4679@gmail.com"
                className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-125 active:scale-95"
                title="Email"
              >
                <Mail size={32} className="text-white" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {year} Himanshu Patel. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            About this website: Built with Vite & React, TypeScript, Tailwind CSS, Framer Motion, AOS & Docker.
          </p>
        </div>
      </div>
    </footer>
  );
}
