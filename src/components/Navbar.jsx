import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'Projects', to: 'projects' },
    { label: 'Skills', to: 'skills' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white bg-opacity-95 backdrop-blur-md shadow-md">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">HP</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Himanshu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/Himanshu_Portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block btn-primary text-sm"
          >
            Download Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 pb-4 space-y-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg cursor-pointer"
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
                className="block btn-primary text-center text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
