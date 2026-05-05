import React from 'react';

export default function WhyUs() {
  const reasons = [
    {
      title: 'Esperienza Decennale',
      description: 'Oltre 10 anni di esperienza nel settore delle pulizie professionali a Milano.'
    },
    {
      title: 'Team Qualificato',
      description: 'Personale specializzato, affidabile e sottoposto a controlli di sicurezza regolari.'
    },
    {
      title: 'Prodotti Ecologici',
      description: 'Utilizziamo detergenti eco-friendly sicuri per l\'ambiente e la salute delle persone.'
    },
    {
      title: 'Disponibilità 24/7',
      description: 'Servizi disponibili in qualsiasi momento, anche per emergenze e situazioni particolari.'
    },
    {
      title: 'Prezzi Competitivi',
      description: 'Tariffe trasparenti e convenienti, senza sorprese. Preventivi gratuiti personalizzati.'
    },
    {
      title: 'Garanzia di Qualità',
      description: 'Garantiamo il massimo standard qualitativo in ogni intervento che effettuiamo.'
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perché Scegliere Ecosolution</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Siamo il partner affidabile per le tue esigenze di pulizia. Scopri cosa ci rende speciali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Certificazioni e Standard</h3>
          <p className="text-xl mb-8 opacity-90">
            Conformi alle normative ISO per la qualità e la sicurezza sul lavoro
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">ISO 9001</div>
              <div className="text-sm opacity-80">Gestione Qualità</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">ISO 45001</div>
              <div className="text-sm opacity-80">Sicurezza Lavoro</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">REACH</div>
              <div className="text-sm opacity-80">Sostanze Chimiche</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-sm opacity-80">Valutazione Clienti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
