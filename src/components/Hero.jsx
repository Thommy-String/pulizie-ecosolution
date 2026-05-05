import React from 'react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-0 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Testo e CTA */}
          <div className="pt-12">
            <div className="mb-6 inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">✨ Numero 1 a Milano</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pulizie Professionali a <span className="text-blue-600">Milano</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ecosolution è il tuo partner affidabile per pulizie impeccabili in ogni ambiente.
            </p>
            <ul className="text-lg text-gray-700 mb-8 space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl font-bold">✓</span>
                <span>Case, appartamenti e ville private</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl font-bold">✓</span>
                <span>Uffici e spazi commerciali</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl font-bold">✓</span>
                <span>Negozi, ospedali e strutture sanitarie</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl font-bold">✓</span>
                <span>Pulizie post-restrutturazione</span>
              </li>
            </ul>
            <div className="flex gap-4 flex-col sm:flex-row mb-12">
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
            
            {/* Statistiche */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <p className="text-sm text-gray-600">Clienti</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <p className="text-sm text-gray-600">Anni</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <p className="text-sm text-gray-600">Disponibili</p>
              </div>
            </div>
          </div>

          {/* Immagine */}
          <div className="relative h-full">
            <img 
              src="https://www.nova-servizi.it/images/impresa-di-pulizia-milano.jpg" 
              alt="Pulizie professionali Milano"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
