import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Available for Freelance Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tarun Rana
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">
              Full-Stack Web Developer
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Laravel • React • WordPress • Shopify
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Turning ideas into scalable web solutions with clean code, smart architecture, and real results.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all"
              >
                Hire Me
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/tarunrana080"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-md"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="https://github.com/tarunrana080"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-md"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a
                href="mailto:ranatarun080@gmail.com"
                className="p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-md"
              >
                <Mail size={24} className="text-gray-700" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 w-96 h-96 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-7xl font-bold mb-4">3+</div>
                  <div className="text-2xl">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
