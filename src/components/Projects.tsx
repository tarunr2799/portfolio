import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Consulate General – Visa Portal',
      description: 'A secure and fast visa application system built with Laravel and React. Features include multi-language support, document management, and real-time application tracking.',
      tech: ['Laravel', 'React', 'MySQL', 'REST API'],
      url: 'https://afpass.af/react/en',
      image: '/projects/consulate.png',
    },
    {
      title: 'Syncost – Shopify Business Sync',
      description: 'A comprehensive business sync platform with Facebook/Google login integration and seamless Shopify synchronization. Built with Laravel and Vue.js.',
      tech: ['Laravel', 'Vue.js', 'Shopify API', 'OAuth'],
      url: 'https://syncost.store',
      image: '/projects/syncost.png',
    },
    {
      title: 'Imperium AI – Automated Publishing',
      description: 'A complete AI-powered content automation system that handles blog publishing, content generation, and scheduling automatically.',
      tech: ['Laravel', 'AI Integration', 'Automation', 'CMS'],
      url: 'https://imperiumai.ai',
      image: '/projects/imperium.png',
    },
    {
      title: 'Custom2Wear – E-commerce Store',
      description: 'Full-featured apparel e-commerce platform with custom product uploads, artwork preview, embroidery selection, and advanced product customization.',
      tech: ['WordPress', 'WooCommerce', 'Custom Plugin', 'PHP'],
      url: 'https://custom2wear.com',
      image: '/projects/custom2wear.png',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise in full-stack development, automation, and e-commerce solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                >
                  View Project
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
