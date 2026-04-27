import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'AgriGuard',
      subtitle: 'AI-Powered Disease Detection',
      type: 'Capstone Project',
      date: 'Jan 2026 – Apr 2026',
      location: 'In Progress',
      description: 'Intelligent crop disease detection system using deep learning and computer vision with 90%+ accuracy.',
      icon: '🌾',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'YelpCamp',
      subtitle: 'Cloud Native Full-Stack Web Application',
      type: 'Personal Project',
      date: 'Jan 2025 – Apr 2025',
      location: 'Full-time Development',
      description: 'Architected and deployed a production-grade full-stack application on AWS EKS with automated CI/CD pipeline.',
      icon: '🏕️',
      color: 'from-blue-500 to-cyan-500'
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
            right: -8px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-left: 8px solid rgb(31 41 55);
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
          }

          .card-arrow-left::before {
            content: '';
            position: absolute;
            left: -8px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-right: 8px solid rgb(31 41 55);
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
          }

          .dark .card-arrow-right::after {
            border-left-color: rgb(31 41 55);
          }

          .dark .card-arrow-left::before {
            border-right-color: rgb(31 41 55);
          }

          /* Timeline line positioning */
          .timeline-line {
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 2px !important;
            top: 0 !important;
            bottom: 0 !important;
            z-index: 0 !important;
          }

          @media (max-width: 1023px) {
            .timeline-line {
              left: 50% !important;
              width: 2px !important;
            }
          }
        `}</style>

        {/* Timeline Container with proper relative positioning */}
        <div className="relative" style={{width: '100%'}}>
          {/* Vertical Timeline Line - Full Height */}
          <div 
            className="timeline-line bg-gray-300 dark:bg-gray-700"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              top: '-50px',
              bottom: '-50px',
              zIndex: 0
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="relative"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="700"
              >
                           
                {/* Desktop Layout - Timeline Style */}
                <div
                  className="hidden lg:grid lg:grid-cols-[1fr_120px_1fr] lg:items-center mx-auto max-w-5xl"
                  style={{ minHeight: '140px' }}
                >
                  {idx % 2 === 0 ? (
                    <>
                      {/* Left Card */}
                      <div className="flex justify-end pr-8">
                        <div className="relative w-full max-w-[380px] bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 card-arrow-right">
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

                      {/* Center Node */}
                      <div className="relative flex items-center justify-center h-full">
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative z-10">
                          <span className="text-5xl">{exp.icon}</span>
                        </div>
                      </div>

                      {/* Right Date */}
                      <div className="flex justify-start pl-8">
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
                      {/* Left Date */}
                      <div className="flex justify-end pr-8">
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap">
                            {exp.date}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Center Node */}
                      <div className="relative flex items-center justify-center h-full">
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative z-10">
                          <span className="text-5xl">{exp.icon}</span>
                        </div>
                      </div>

                      {/* Right Card */}
                      <div className="flex justify-start pl-8">
                        <div className="relative w-full max-w-[380px] bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 card-arrow-left">
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
                <div className="lg:hidden relative">
                  <div className="flex flex-col items-center">
                    {/* Timeline node - centered */}
                    <div className="flex items-center justify-center mb-6 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md flex items-center justify-center">
                        <span className="text-3xl">{exp.icon}</span>
                      </div>
                    </div>
                    
                    {/* Card - alternates left/right */}
                    <div className={`flex w-full px-4 mb-8 ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-5 w-full max-w-xs hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-2">
                          {exp.subtitle}
                        </p>
                        <p className="text-xs text-gray-700 dark:text-gray-400 leading-relaxed mb-3">
                          {exp.description}
                        </p>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <Calendar size={14} />
                            {exp.date}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
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
