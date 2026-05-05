import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Pulizie Civili',
      description: 'Pulizia profonda e regolare per appartamenti e case private. Detergenti ecologici e attrezzature all\'avanguardia.',
      icon: '🏠',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Pulizie Uffici',
      description: 'Mantenimento quotidiano di spazi lavorativi. Ambienti igienici per aumentare la produttività del team.',
      icon: '💼',
      color: 'green'
    },
    {
      id: 3,
      title: 'Pulizie Negozi',
      description: 'Pulizia di vetrine, pavimenti e aree comuni. Creiamo un ambiente accogliente per i tuoi clienti.',
      icon: '🏪',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Strutture Sanitarie',
      description: 'Protocolli igienici certificati per ospedali, cliniche e studi medici. Massima sterilizzazione garantita.',
      icon: '🏥',
      color: 'red'
    },
    {
      id: 5,
      title: 'Post Restrutturazioni',
      description: 'Rimozione di polvere e macerie dopo lavori edili. Pulizie specializzate con attrezzature professionali.',
      icon: '🔨',
      color: 'orange'
    },
    {
      id: 6,
      title: 'Manutenzione Quotidiana',
      description: 'Programmi di pulizia ricorrenti personalizzati. Flessibilità oraria secondo le tue esigenze.',
      icon: '✨',
      color: 'yellow'
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    green: 'bg-green-50 border-green-200 text-green-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600',
    red: 'bg-red-50 border-red-200 text-red-600',
    orange: 'bg-orange-50 border-orange-200 text-orange-600',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Offriamo soluzioni di pulizia complete e personalizzate per ogni tipo di esigenza, dalle case alle strutture commerciali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${colorClasses[service.color]} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
                Scopri di più
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
