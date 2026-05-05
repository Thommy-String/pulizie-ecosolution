import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Pulizie Civili',
      description: 'Pulizia profonda e regolare per appartamenti, case e ville private con detergenti ecologici.',
      features: ['Pulizia settimanale/mensile', 'Detergenti eco-friendly', 'Rispetto arredamento', 'Orari flessibili'],
      icon: '��',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Pulizie Uffici',
      description: 'Mantenimento quotidiano di spazi lavorativi igienici e ordinati per aumentare la produttività.',
      features: ['Servizi giornalieri', 'Aree comuni e private', 'Bagni sempre igienici', 'Zero interruzioni'],
      icon: '💼',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Pulizie Negozi',
      description: 'Pulizia di vetrine, pavimenti e aree comuni. Creiamo un ambiente accogliente per i clienti.',
      features: ['Vetrine brillanti', 'Pavimenti lucidi', 'Aree esterne', 'Odore fresco'],
      icon: '🏪',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Strutture Sanitarie',
      description: 'Protocolli igienici certificati per ospedali, cliniche e studi medici con massima sterilizzazione.',
      features: ['Sterilizzazione certificata', 'Protocolli ISO', 'Disinfettanti professionali', 'Controlli qualità'],
      icon: '🏥',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 5,
      title: 'Post Restrutturazioni',
      description: 'Rimozione di polvere e macerie dopo lavori edili con attrezzature professionali specializzate.',
      features: ['Rimozione polvere', 'Pulizia profonda', 'Smaltimento macerie', 'Risultato impeccabile'],
      icon: '🔨',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      title: 'Manutenzione Quotidiana',
      description: 'Programmi di pulizia ricorrenti personalizzati con flessibilità oraria secondo le tue esigenze.',
      features: ['Pacchetti personalizzati', 'Preventivi gratuiti', 'Prezzi competitivi', 'Disponibilità 24/7'],
      icon: '✨',
      color: 'from-yellow-500 to-yellow-600'
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Header con colore */}
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white text-center`}>
                <div className="text-6xl mb-2">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-700 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2">
                  Richiedi Preventivo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info aggiuntiva */}
        <div className="mt-16 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Non trovi il servizio che cerchi?</h3>
          <p className="text-gray-700 mb-6">
            Contattaci per discutere di soluzioni personalizzate specifiche per le tue esigenze.
          </p>
          <button className="btn-primary">
            Parla con un Esperto
          </button>
        </div>
      </div>
    </section>
  );
}
