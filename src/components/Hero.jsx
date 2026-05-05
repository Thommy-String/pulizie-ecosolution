import React from 'react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pulizie Professionali a <span className="text-blue-600">Milano</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ecosolution garantisce pulizie impeccabili per case, uffici, negozi e strutture sanitarie. Affidati ai nostri esperti per ambienti sempre puliti e igienici.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-center"
              >
                Richiedi un Preventivo
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-secondary text-center"
              >
                Scopri i Servizi
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Clienti Soddisfatti</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Anni di Esperienza</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Disponibilità</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Garanzia Qualità</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
