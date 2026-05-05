import React, { useState } from 'react';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Quali sono le vostre aree di servizio a Milano?',
      answer: 'Operiamo in tutta l\'area della provincia di Milano e nell\'hinterland. Contattaci per verificare se la tua zona è coperta dal nostro servizio.'
    },
    {
      id: 2,
      question: 'Quali prodotti utilizzate per le pulizie?',
      answer: 'Utilizziamo esclusivamente detergenti ecologici e certificati, sicuri per l\'ambiente e per la salute di persone e animali domestici. Tutti i nostri prodotti sono biodegradabili e privi di sostanze tossiche.'
    },
    {
      id: 3,
      question: 'Quanti giorni sono necessari per la pulizia post-ristrutturazione?',
      answer: 'Dipende dalle dimensioni della proprietà e dal tipo di lavori effettuati. Generalmente, per un appartamento di 100 m² sono necessari 2-3 giorni di lavoro intenso. Faremo una valutazione gratuita.'
    },
    {
      id: 4,
      question: 'Offrite pacchetti ricorrenti con sconti?',
      answer: 'Sì! Offriamo pacchetti mensili, settimanali e personalizzati con sconti significativi. Contattaci per ricevere un preventivo personalizzato senza impegno.'
    },
    {
      id: 5,
      question: 'Quanto è affidabile il vostro team?',
      answer: 'Il nostro team è altamente qualificato, assicurato e sottoposto a regolari controlli di sicurezza. Offriamo una garanzia di soddisfazione al 100% su ogni servizio.'
    },
    {
      id: 6,
      question: 'Quali sono i vostri orari di disponibilità?',
      answer: 'Siamo disponibili 24 ore su 24, 7 giorni su 7, inclusi festivi. Contattaci per emergenze o necessità straordinarie e valuteremo la disponibilità.'
    },
    {
      id: 7,
      question: 'Come funziona il preventivo?',
      answer: 'Il preventivo è completamente gratuito. Un nostro specialista effettuerà una valutazione visiva del luogo o dialoga per comprendere le vostre esigenze, fornendo un preventivo trasparente senza costi nascosti.'
    },
    {
      id: 8,
      question: 'Siete assicurati per eventuali danni?',
      answer: 'Sì, siamo pienamente assicurati. Tutte le nostre operazioni sono coperte da polizze assicurative complete per garantire la massima tranquillità ai nostri clienti.'
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Domande Frequenti</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trova le risposte alle domande più comuni sui nostri servizi di pulizia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {openId === faq.id && (
                <div className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Non trovi la risposta che cerchi?</h3>
          <p className="text-gray-600 mb-6">Contattaci direttamente, il nostro team è sempre disponibile per aiutarti.</p>
          <a
            href="tel:+39123456789"
            className="btn-primary inline-block"
          >
            Chiamaci Ora
          </a>
        </div>
      </div>
    </section>
  );
}
