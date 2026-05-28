import React from 'react';
import logo from '../assets/logo/ecosolution ditta pulizie.png';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container-custom flex justify-between items-center py-3">

        {/* Logo + testo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Ecosolution" className="h-14 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">Ditta di Pulizie</span>
            <span className="text-[11px] font-medium text-gray-500">Milano e provincia</span>
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
