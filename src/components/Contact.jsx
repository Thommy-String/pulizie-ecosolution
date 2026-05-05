import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const services = [
    'Pulizie Civili',
    'Pulizie Uffici',
    'Pulizie Negozi',
    'Strutture Sanitarie',
    'Post Restrutturazioni',
    'Manutenzione Quotidiana'
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contattaci</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Richiedi un preventivo gratuito o informazioni sui nostri servizi. Ti risponderemo entro 24 ore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Es. Giovanni Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="es@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                  Tipo di Servizio *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Seleziona un servizio...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Descrivi le tue esigenze..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Invia Richiesta
              </button>

              {submitted && (
                <div className="bg-green-50 border-2 border-green-200 text-green-700 p-4 rounded-lg text-center">
                  ✓ Richiesta inviata con successo! Ti contatteremo presto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informazioni di Contatto</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefono</h4>
                    <a href="tel:+39123456789" className="text-blue-600 hover:text-blue-700 font-medium">
                      +39 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    ��
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@ecosolution-milano.it" className="text-blue-600 hover:text-blue-700 font-medium">
                      info@ecosolution-milano.it
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Indirizzo</h4>
                    <p className="text-gray-600">
                      Via Milano, 123<br />
                      20100 Milano (MI)<br />
                      Italia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Orari</h4>
                    <p className="text-gray-600">
                      Disponibili 24/7<br />
                      Incluso festivi e festività
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Servizi d'Emergenza</h4>
              <p className="mb-6 opacity-90">
                Hai bisogno di un intervento urgente? Contattaci subito tramite telefono e faremo del nostro meglio per assisterti entro poche ore.
              </p>
              <a
                href="tel:+39123456789"
                className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contatta d'Emergenza
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
