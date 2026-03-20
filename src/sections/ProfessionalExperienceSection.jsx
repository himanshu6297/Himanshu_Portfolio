export default function ProfessionalExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: 'YelpCamp',
      subtitle: 'Cloud Native Full-Stack Web Application',
      date: 'Jan 2025 – Apr 2025',
      description: 'A production-grade, cloud-native full-stack web application with microservices, containerization, and CI/CD automation.',
      icon: '🏗️'
    },
    {
      id: 2,
      title: 'AgriGuard',
      subtitle: 'AI-Powered Leaf Disease Detection',
      date: 'Jan 2026 – Apr 2026',
      description: 'An intelligent crop disease detection system using deep learning and computer vision to analyze leaf images with 90%+ accuracy.',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Android Development',
      subtitle: 'Internship at PraxWare Technologies',
      date: 'Jun 2022 – Jul 2022',
      description: 'Developed feature-rich Android applications with hands-on experience in mobile architecture, UI design, and REST API integration.',
      icon: '📱'
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

        {/* CSS for pointer arrows */}
        <style>{`
          .card-arrow-right::after {
            content: '';
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-left: 8px solid rgba(31, 41, 55, 1);
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
          .dark .card-arrow-right::after {
            border-left-color: rgba(31, 41, 55, 1);
          }
          .card-arrow-left::before {
            content: '';
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-right: 8px solid rgba(31, 41, 55, 1);
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
          .dark .card-arrow-left::before {
            border-right-color: rgba(31, 41, 55, 1);
          }
        `}</style>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Thin and Subtle */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-0 bg-gray-300 dark:bg-gray-700"></div>

          {/* Timeline Items - Perfect Alignment */}
          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="relative"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="700"
              >
                {/* Desktop Layout - Full Row with Card, Arrow, Node, Date - Compact */}
                <div className="hidden lg:flex lg:items-center lg:justify-center gap-0" style={{ minHeight: '120px' }}>
                  {idx % 2 === 0 ? (
                    <>
                      {/* Left: Card with Right Arrow */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '300px', minHeight: '120px' }}>
                        <div className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 card-arrow-right w-full h-full flex flex-col justify-center">
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

                      {/* Minimal spacing before center node */}
                      <div style={{ width: '8px' }}></div>

                      {/* Center: Timeline Node */}
                      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 'auto' }}>
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative z-10 flex-shrink-0">
                          <span className="text-5xl">{exp.icon}</span>
                        </div>
                      </div>

                      {/* Minimal spacing after center node */}
                      <div style={{ width: '8px' }}></div>

                      {/* Right: Date */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '120px', minHeight: '120px' }}>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap">
                          {exp.date}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Date */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '120px', minHeight: '120px' }}>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap">
                          {exp.date}
                        </p>
                      </div>

                      {/* Minimal spacing before center node */}
                      <div style={{ width: '8px' }}></div>

                      {/* Center: Timeline Node */}
                      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 'auto' }}>
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative z-10 flex-shrink-0">
                          <span className="text-5xl">{exp.icon}</span>
                        </div>
                      </div>

                      {/* Minimal spacing after center node */}
                      <div style={{ width: '8px' }}></div>

                      {/* Right: Card with Left Arrow */}
                      <div className="flex-shrink-0 flex items-center" style={{ width: '300px', minHeight: '120px' }}>
                        <div className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 card-arrow-left w-full h-full flex flex-col justify-center">
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

                {/* Tablet Layout */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 items-center relative">
                  {/* Vertical Line for Tablet */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-0 bg-gray-300 dark:bg-gray-700"></div>

                  {idx % 2 === 0 ? (
                    <>
                      {/* Left Content */}
                      <div className="pr-8">
                        <div className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-7 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-3">
                            {exp.subtitle}
                          </p>
                          <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Center Node */}
                      <div className="flex flex-col items-center relative z-10">
                        <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md flex items-center justify-center">
                          <span className="text-4xl">{exp.icon}</span>
                        </div>
                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mt-4 whitespace-nowrap">
                          {exp.date}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Empty or Date */}
                      <div className="pl-8 text-center">
                        <p className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap">
                          {exp.date}
                        </p>
                      </div>

                      {/* Right Content */}
                      <div className="relative z-10">
                        <div className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-7 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-3">
                            {exp.subtitle}
                          </p>
                          <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout - Stacked */}
                <div className="md:hidden flex flex-col items-center gap-6">
                  {/* Mobile Timeline Node */}
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md flex items-center justify-center">
                    <span className="text-4xl">{exp.icon}</span>
                  </div>

                  {/* Mobile Content Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-7 w-full">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-3">
                      {exp.subtitle}
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                      {exp.date}
                    </p>
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
