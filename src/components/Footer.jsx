import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer */}
      <div className="container-custom section-padding border-b border-gray-800">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Ecosolution</h4>
            <p className="text-gray-400 mb-4">
              La tua soluzione completa per pulizie professionali a Milano dal 2014.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                in
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servizi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Pulizie Civili</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pulizie Uffici</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pulizie Negozi</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Post Restrutturazioni</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Strutture Sanitarie</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Azienda</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#why-us" className="hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificazioni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lavora con noi</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legale</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termini di Servizio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>&copy; ${currentYear} Ecosolution. Tutti i diritti riservati.</p>
          <p>
            Realizzato con <span className="text-red-500">❤</span> per Milano
          </p>
        </div>
      </div>
    </footer>
  );
}
