import React from 'react';

export default function Contact() {
  const contacts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600',
      label: 'Chiamaci ora',
      value: '+39 334 222 1212',
      href: 'tel:+393342221212',
      cta: 'Chiama',
      ctaClass: 'bg-blue-600 hover:bg-blue-700 text-white',
      note: 'Lun–Dom, 08:00–20:00',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-green-100 text-green-600',
      label: 'Scrivici via email',
      value: 'info@ecosolutionsas.it',
      href: 'mailto:info@ecosolutionsas.it',
      cta: 'Scrivi',
      ctaClass: 'bg-green-600 hover:bg-green-700 text-white',
      note: 'Risposta entro 2 ore',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'bg-emerald-100 text-emerald-600',
      label: 'WhatsApp',
      value: '+39 334 222 1212',
      href: 'https://wa.me/393342221212',
      cta: 'Chatta',
      ctaClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      note: 'Risposta immediata',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Contatti</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Parliamo del tuo progetto</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Preventivo gratuito in giornata. Nessun impegno, risposta rapida.
          </p>
        </div>

        {/* Card contatti */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
          {contacts.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-7 flex flex-col items-center text-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${c.color}`}>
                {c.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                <p className="font-bold text-gray-900 text-base">{c.value}</p>
                <p className="text-xs text-gray-400 mt-1">{c.note}</p>
              </div>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors duration-200 ${c.ctaClass}`}
              >
                {c.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Banner emergenze */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Disponibili ora</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Hai un'emergenza?</h3>
            <p className="text-gray-400 text-sm">Interveniamo in giornata, anche nel weekend e nei festivi.</p>
          </div>
          <a
            href="tel:+393342221212"
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Chiama ora — +39 334 222 1212
          </a>
        </div>

      </div>
    </section>
  );
}
