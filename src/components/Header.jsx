import React, { useState } from 'react';
import logo from '../assets/logo/ecosolution ditta pulizie.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Ecosolution" className="h-12 w-auto" />
          <span className="font-bold text-xl text-gray-900 hidden sm:inline">Ecosolution</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Servizi
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Chi Siamo
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Contatti
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden flex flex-col gap-4 p-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full"
            >
              Contatti
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
