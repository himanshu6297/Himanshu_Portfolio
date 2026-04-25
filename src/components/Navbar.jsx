import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Skills', to: 'skills' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0ea5e9, #06b6d4);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          transform: translateY(-2px);
          text-shadow: 0 0 8px rgba(14, 165, 233, 0.5);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.dark:hover {
          text-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
        }
      `}</style>
      <nav className="fixed w-full top-0 z-50 bg-white bg-opacity-95 backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-95 dark:shadow-lg transition-colors duration-300">
        <div className="section-container">
          <div className="flex justify-between items-center py-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img src="/images/icon.png" alt="Himanshu Patel" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">Himanshu Patel</span>
            </ScrollLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="nav-link text-gray-700 dark:text-gray-300 font-medium cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/50"
              >
                Download Resume
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-4">
              <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
              <button
                className="dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pb-4 space-y-2">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="/Himanshu_Portfolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-primary text-center text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/50"
                >
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
