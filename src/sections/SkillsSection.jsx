import { skillCategories } from '../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit built through professional experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className="group p-6 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-primary-300 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full hover:bg-primary-100 dark:hover:bg-primary-600 hover:text-primary-700 dark:hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
