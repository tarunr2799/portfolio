import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ranatarun080@gmail.com',
      href: 'mailto:ranatarun080@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7027191118',
      href: 'tel:+917027191118',
      color: 'green',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'tarunrana080',
      href: 'https://www.linkedin.com/in/tarunrana080',
      color: 'orange',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null,
      color: 'red',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600',
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm always open to new challenges and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.label}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className={`${colorClasses[contact.color as keyof typeof colorClasses]} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {contact.label}
                </h3>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{contact.value}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Whether it's a web application, e-commerce platform, or automation system, I'm here to help.
          </p>
          <a
            href="mailto:ranatarun080@gmail.com"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
