import { Code, Database, Globe, Users } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'blue',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vue.js'],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'green',
      skills: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'Authentication'],
    },
    {
      title: 'Platforms & Tools',
      icon: Globe,
      color: 'orange',
      skills: ['WordPress', 'WooCommerce', 'Shopify', 'Git', 'API Integration'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'red',
      skills: ['Leadership', 'Time Management', 'Problem Solving', 'Communication'],
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-600',
      bgLight: 'bg-blue-50',
      text: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700',
    },
    green: {
      bg: 'bg-green-600',
      bgLight: 'bg-green-50',
      text: 'text-green-600',
      badge: 'bg-green-100 text-green-700',
    },
    orange: {
      bg: 'bg-orange-600',
      bgLight: 'bg-orange-50',
      text: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-700',
    },
    red: {
      bg: 'bg-red-600',
      bgLight: 'bg-red-50',
      text: 'text-red-600',
      badge: 'bg-red-100 text-red-700',
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
              >
                <div className={`${colors.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
