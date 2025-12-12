import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a dedicated <span className="font-semibold text-blue-600">Full-Stack Developer</span> with expertise in Laravel, React, WordPress, and Shopify. I develop high-performance websites, automation systems, and e-commerce platforms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My focus is on quality, clean architecture, and building solutions that solve real business problems. With over a year of professional experience, I've delivered scalable web applications and custom solutions that help businesses grow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in continuous learning, staying updated with the latest technologies, and delivering results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Clean Code</h3>
              <p className="text-gray-600 text-sm">
                Writing maintainable, scalable, and well-documented code
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Problem Solving</h3>
              <p className="text-gray-600 text-sm">
                Finding creative solutions to complex technical challenges
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Meeting deadlines without compromising on quality
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Result Focused</h3>
              <p className="text-gray-600 text-sm">
                Delivering solutions that drive business growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
