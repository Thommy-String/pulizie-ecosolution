import React from 'react';
import logo from '../assets/logo/ecosolution ditta pulizie.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Team Photo */}
      <div className="container-custom py-8">
        <div className="max-w-xs mx-auto overflow-hidden rounded-2xl shadow-md">
          <img
            src="https://skyshinesolution.com/assets/team-photo-Ld754K59.jpg"
            alt="Il team Eco Solution"
            className="w-full h-40 object-cover object-top"
          />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-xs text-blue-400 font-semibold uppercase tracking-widest mb-2">Pronto a iniziare?</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Preventivo gratuito in giornata</h3>
            <p className="text-gray-400 mt-1 text-sm">Nessun impegno · Risposta entro 1 ora · Lun–Dom 08:00–20:00</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+393342221212"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl transition-colors duration-200 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +39 334 222 1212
            </a>
            <a
              href="https://wa.me/393342221212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl transition-colors duration-200 text-sm"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <img src={logo} alt="Ecosolution" className="h-10 w-auto mb-3" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Ditta di pulizie professionali a Milano, Monza e Como dal 2008.
            </p>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              Sede Legale: Via Primo Maggio 3, 23892 Bulciago (LC)<br />
              Sede Operativa: Via Roma 8, 20823 Lentate sul Seveso (MB)
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="text-white font-semibold mb-3">Servizi</p>
              <ul className="space-y-2 text-gray-500">
                {['Pulizie Civili', 'Pulizie Uffici', 'Pulizie Negozi', 'Strutture Sanitarie', 'Post Ristrutturazioni'].map(s => (
                  <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Azienda</p>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#why-us" className="hover:text-white transition-colors">Chi Siamo</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {currentYear} Eco Solution SAS. Tutti i diritti riservati.</p>
          <p>P.IVA / C.F. 04640600161 · SDI T9K4ZHO</p>
        </div>
      </div>

    </footer>
  );
}
