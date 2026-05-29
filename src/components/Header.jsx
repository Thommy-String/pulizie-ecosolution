import React from 'react';
import logo from '../assets/logo/ecosolution ditta pulizie.png';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container-custom flex justify-between items-center py-3">

        {/* Logo + testo + Google trust */}
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Ecosolution" className="h-10 w-auto" />
          <div className="flex flex-col leading-tight gap-0.5">
            <span className="text-[11px] font-semibold text-gray-700">Ditta Pulizie · <span className="font-bold text-gray-900">EcoSolution</span></span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <div className="flex gap-px">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[10px] font-bold text-gray-700">4.9</span>
              <span className="text-[10px] text-gray-400 hidden sm:inline">· su 450+ lavori</span>
            </div>
          </div>
        </div>

        {/* CTA telefono */}
        <div className="flex flex-col items-end gap-0.5">
          <a
            href="tel:+393342221212"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-colors duration-200 text-xs sm:text-sm"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">+39 334 222 1212</span>
            <span className="sm:hidden">Chiama</span>
          </a>
          <span className="text-[10px] text-gray-400 tracking-wide hidden sm:block">Lun–Dom 08:00–20:00</span>
        </div>

      </div>
    </header>
  );
}
