import React from 'react';
import heroVideo from '../assets/videos/hero video cleaning optimized.mp4';
import TrustedBy from './TrustedBy';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    'Case, appartamenti privati',
    'Uffici negozi e spazi commerciali',
    'Ospedali e strutture sanitarie',
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16 pb-16 sm:pb-20">
      {/* Video di background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay scuro gradiente - ridotto per visibilità video */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/55 via-gray-900/35 to-transparent"></div>

      <div className="relative z-10 container-custom py-12">
        <div className="max-w-3xl mx-auto sm:mx-0">

          {/* Badge - centrato su mobile, sinistra su desktop */}
          <div className="flex items-center gap-3 bg-yellow-500/15 border border-yellow-400/50 backdrop-blur-sm text-yellow-200 font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 justify-center sm:justify-start mx-auto sm:mx-0 w-fit">
            <span className="bg-yellow-400 text-gray-900 text-sm font-black px-2.5 py-0.5 rounded-full leading-tight">-30%</span>
            <span className="text-sm">promo nuovi clienti</span>
          </div>

          {/* Trusted By Component - in cima */}
          <div className="flex justify-center sm:justify-start mb-6">
            <TrustedBy />
          </div>

          {/* Titolo */}
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight my-12 text-center sm:text-left">
            Ditta di Pulizie a Milano<br />
            <span className="text-blue-300">Rapido e Conveniente</span>
          </h1>


          {/* Check list verdi */}
          <ul className="mb-10 space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-100 justify-center sm:justify-start">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{service}</span>
              </li>
            ))}
          </ul>

          {/* Single CTA button - più grande */}
          <div className="flex flex-col items-center sm:items-start gap-2 mb-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-base shadow-lg hover:shadow-xl"
            >
              Chiama per un Preventivo Gratis
            </button>
            <p className="text-xs text-gray-400">
              🔒 Nessun impegno · Risposta immediata
            </p>
          </div>

        </div>
      </div>


    </section>
  );
}
