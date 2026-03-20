import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'YelpCamp',
      subtitle: 'Cloud Native Full-Stack Web Application',
      type: 'Personal Project',
      date: 'Jan 2025 – Apr 2025',
      location: 'Full-time Development',
      description: 'Architected and deployed a production-grade full-stack application on AWS EKS with automated CI/CD pipeline.',
      icon: '🏗️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AgriGuard',
      subtitle: 'AI-Powered Disease Detection',
      type: 'Capstone Project',
      date: 'Jan 2026 – Apr 2026',
      location: 'In Progress',
      description: 'Intelligent crop disease detection system using deep learning and computer vision with 90%+ accuracy.',
      icon: '🤖',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Android Development',
      subtitle: 'Internship at PraxWare Technologies',
      type: 'Professional Internship',
      date: 'Jun 2022 – Jul 2022',
      location: 'Ahmedabad, India',
      description: 'Developed feature-rich Android applications with hands-on experience in mobile architecture and UI design.',
      icon: '📱',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="section bg-white dark:bg-gray-900 py-32 transition-colors duration-300">
      <div className="section-container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            My professional journey and key milestones
          </p>
        </div>

        {/* CSS for pointer arrows and timeline */}
        <style>{`
          .card-arrow-right::after {
            content: '';
            position: absolute;
            right: -48px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-left: 6px solid currentColor;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
          }
          .card-arrow-left::before {
            content: '';
            position: absolute;
            left: -48px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-right: 6px solid currentColor;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
          }
        `}</style>

        {/* Timeline Container */}
        <div className="relative mx-auto">
          {/* Vertical Timeline Line - Thin and Subtle */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-0 bg-gray-300 dark:bg-gray-700"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="relative"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="700"
              >
                {/* Desktop Layout - Full Row */}
                <div className="hidden lg:flex lg:items-center lg:justify-center gap-0 mx-auto" style={{ minHeight: '120px', width: '450px' }}>
                  {idx % 2 === 0 ? (
                    <>
                      {/* Left: Card with Right Arrow */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '177px', minHeight: '120px' }}>
                        <div className={`relative bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 card-arrow-right w-full h-full flex flex-col justify-center`}>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-2">
                            {exp.subtitle}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed line-clamp-2">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Center: Timeline Node */}
                      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '96px' }}>
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative z-10 flex-shrink-0">
                          <span className="text-5xl">{exp.icon}</span>
                        </div>
                      </div>

                      {/* Right: Date */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '177px', minHeight: '120px' }}>
                        <div>
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap">
                            {exp.date}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Date */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '177px', minHeight: '120px' }}>
                        <div>
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap">
                            {exp.date}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Center: Timeline Node */}
                      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '96px', height: '96px' }}>
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative z-10 flex-shrink-0">
                          <span className="text-5xl">{exp.icon}</span>
                        </div>
                      </div>

                      {/* Right: Card with Left Arrow */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '177px', minHeight: '120px' }}>
                        <div className={`relative bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 card-arrow-left w-full h-full flex flex-col justify-center`}>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-2">
                            {exp.subtitle}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed line-clamp-2">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Tablet/Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center gap-6">
                    {/* Node */}
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md flex items-center justify-center">
                      <span className="text-4xl">{exp.icon}</span>
                    </div>
                    {/* Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6 w-full max-w-sm hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-3">
                        {exp.subtitle}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                          <Calendar size={14} />
                          {exp.date}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
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
