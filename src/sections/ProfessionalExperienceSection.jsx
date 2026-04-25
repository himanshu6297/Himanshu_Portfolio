export default function ProfessionalExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: 'Diploma - Computer Engineering',
      subtitle: 'VPMP Polytechnic',
      date: 'Jun 2016 – May 2019',
      description: 'Built a strong foundation in computer engineering, covering programming, database management, networking, and system design principles.',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'Student Intern',
      subtitle: 'Strawberry Enterprises Pvt. Ltd.',
      date: 'Jul 2017 – Aug 2017',
      description: 'Worked on electronics and IoT-based projects using Arduino and sensors. Gained hands-on experience in data acquisition, hardware integration, and basic network communication.',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Bachelor Degree - Computer Engineering',
      subtitle: 'Hasmukh Goswami College of Engineering',
      date: 'Mar 2020 – Apr 2024',
      description: 'Developed advanced knowledge in software development, data structures, algorithms, and cloud computing, with a focus on building scalable and efficient applications.',
      icon: '🎓'
    },
    {
      id: 4,
      title: 'Android Development',
      subtitle: 'Internship at PraxWare Technologies',
      date: 'Jun 2022 – Jul 2022',
      description: 'Built Android applications with modern UI/UX practices and REST API integration. Learned mobile app architecture and real-world deployment workflows.',
      icon: '📱'
    },
    {
      id: 5,
      title: 'Moved to Canada',
      subtitle: 'Career Relocation',
      date: 'Aug 2024',
      description: 'Relocated to Canada to pursue higher education and expand professional opportunities in software development, AI, and cloud technologies.',
      icon: '🍁'
    },
    {
      id: 6,
      title: 'Postgraduate Certificate - Cloud Computing',
      subtitle: 'Durham College',
      date: 'Sept 2024 – Apr 2025',
      description: 'Gained practical experience in cloud platforms like AWS and Azure, focusing on cloud infrastructure, deployment strategies, and scalable system design.',
      icon: '🎓'
    },
    {
      id: 7,
      title: 'YelpCamp',
      subtitle: 'Capstone Project - Cloud-Native Full-Stack Application',
      date: 'Jan 2025 – Apr 2025',
      description: 'Developed a cloud-native full-stack application using microservices architecture, containerization (Docker), and CI/CD pipelines for automated deployment.',
      icon: '🏕️'
    },
    {
      id: 8,
      title: 'Postgraduate Certificate - Artificial Intelligence and Data Analytics',
      subtitle: 'Saskatchewan Polytechnic',
      date: 'Sept 2025 – Apr 2026',
      description: 'Studied machine learning, data analytics, and AI systems, focusing on building intelligent solutions using real-world datasets.',
      icon: '🎓'
    },
    {
      id: 9,
      title: 'AgriGuard - Leaf Disease Detection',
      subtitle: 'Capstone Project - AI-Powered Leaf Disease Detection System',
      date: 'Jan 2026 – Apr 2026',
      description: 'Designed and developed an AI-based system using deep learning and computer vision to detect plant diseases from leaf images. Achieved high accuracy and integrated a chatbot for decision support.',
      icon: '🌾'
    }
  ];

  return (
    <section id="experience" className="section bg-white dark:bg-gray-900 py-32 transition-colors duration-300">
      <div className="section-container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 px-2 sm:px-0" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl">
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
            border-left: 8px solid rgb(31 41 55);
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
          }

          .card-arrow-left::before {
            content: '';
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-right: 8px solid rgb(31 41 55);
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
          }

          .dark .card-arrow-right::after {
            border-left-color: rgb(31 41 55);
          }

          .dark .card-arrow-left::before {
            border-right-color: rgb(31 41 55);
          }
        `}</style>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Thin and Subtle */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-0 bg-gray-300 dark:bg-gray-700"></div>

          {/* Timeline Items - Perfect Alignment */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="relative"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="700"
              >
              {/* Desktop Layout - Clean Timeline */}
              <div
                className="hidden lg:grid lg:grid-cols-[1fr_120px_1fr] lg:items-center mx-auto max-w-6xl"
                style={{ minHeight: '140px' }}
              >
                {idx % 2 === 0 ? (
                  <>
                    {/* Left Card */}
                    <div className="flex justify-end pr-2">
                      <div
                        className="relative w-full max-w-[360px] bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6
                        hover:border-blue-400 dark:hover:border-blue-400
                        hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)]
                        hover:-translate-y-2
                        hover:scale-[1.03]
                        transition-all duration-300 ease-out
                        card-arrow-right"
                      >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-2">
                          {exp.subtitle}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
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
                    <div className="flex justify-start pl-2">
                      <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap">
                        {exp.date}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Date */}
                    <div className="flex justify-end pr-2">
                      <p className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide whitespace-nowrap text-right">
                        {exp.date}
                      </p>
                    </div>

                    {/* Center Node */}
                    <div className="relative flex items-center justify-center h-full">
                      <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-300 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative z-10">
                        <span className="text-5xl">{exp.icon}</span>
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="flex justify-start pl-2">
                      <div
                        className="relative w-full max-w-[360px] bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 p-6
                        hover:border-blue-400 dark:hover:border-blue-400
                        hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)]
                        hover:-translate-y-2
                        hover:scale-[1.03]
                        transition-all duration-300 ease-out
                        card-arrow-left"
                      >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-300 font-medium mb-2">
                          {exp.subtitle}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
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
