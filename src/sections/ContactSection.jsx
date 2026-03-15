import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'View repositories',
      link: 'https://github.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'City, Country',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="section-container">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you. Get in touch and let's create something amazing!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                >
                  <div className="text-primary-400 group-hover:text-white">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-100">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">Follow on social media:</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: 'https://github.com' },
                  { icon: Linkedin, link: 'https://linkedin.com' },
                  { icon: Mail, link: 'mailto:your.email@example.com' }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
