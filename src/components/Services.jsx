import React from 'react';
import imgCivile from '../assets/images/servizi images/pulizia civile.webp';
import imgNegozi from '../assets/images/servizi images/pulizia negoi.webp';
import imgOspedali from '../assets/images/servizi images/pulizia ospedali.webp';
import imgPostRistrutturazione from '../assets/images/servizi images/pulizia post restrutturazioni.webp';
import imgQuotidiana from '../assets/images/servizi images/pulizia quotidiana.webp';
import imgUffici from '../assets/images/servizi images/Pulizia-uffici.webp';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Pulizie Civili',
      badge: 'Residenziale',
      badgeColor: 'bg-blue-500',
      forWho: 'Appartamenti · Ville · Case private',
      description: 'Interventi regolari o una-tantum per mantenere la tua abitazione impeccabile. Pensiamo noi a tutto, tu rilassati.',
      benefits: ['Detergenti ecologici certificati', 'Operatori fidati e assicurati', 'Orari su misura tua', 'Pulizia profonda o mantenimento'],
      howItWorks: 'Ci chiami → sopralluogo gratuito → preventivo in giornata → primo intervento entro 48h.',
      image: imgCivile,
    },
    {
      id: 2,
      title: 'Pulizie Uffici',
      badge: 'Business',
      badgeColor: 'bg-emerald-500',
      forWho: 'Uffici · Studi · Coworking · Capannoni',
      description: 'Ambienti di lavoro sempre puliti e professionali. Interveniamo fuori orario per non disturbare la tua attività.',
      benefits: ['Servizio mattino, sera o weekend', 'Bagni e cucine sempre igienici', 'Contratti mensili flessibili', 'Referenti dedicati per aziende'],
      howItWorks: 'Contattaci → analizziamo gli spazi → proponiamo un piano ricorrente → partiamo subito.',
      image: imgUffici,
    },
    {
      id: 3,
      title: 'Pulizie Negozi',
      badge: 'Retail',
      badgeColor: 'bg-purple-500',
      forWho: 'Negozi · Showroom · Centri commerciali',
      description: 'Il tuo punto vendita deve brillare ogni giorno. Vetrine perfette e pavimenti lucidi aumentano le vendite.',
      benefits: ['Vetrine senza aloni', 'Pavimenti trattati e lucidati', 'Pulizia aree esterne', 'Profumazione ambiente'],
      howItWorks: 'Interveniamo prima apertura o dopo chiusura, senza mai intralciare i clienti.',
      image: imgNegozi,
    },
    {
      id: 4,
      title: 'Strutture Sanitarie',
      badge: 'Certificato ISO',
      badgeColor: 'bg-red-500',
      forWho: 'Ospedali · Cliniche · Studi medici · RSA',
      description: 'Protocolli rigorosi di igienizzazione conformi alle normative sanitarie vigenti. Zero compromessi.',
      benefits: ['Conformità normativa sanitaria', 'Prodotti virucidi e battericidi', 'Operatori formati HAI', 'Report igienico post-intervento'],
      howItWorks: 'Valutiamo protocolli richiesti → team specializzato → intervento documentato.',
      image: imgOspedali,
    },
    {
      id: 5,
      title: 'Post Ristrutturazioni',
      badge: 'Specializzato',
      badgeColor: 'bg-orange-500',
      forWho: 'Cantieri residenziali · Ristrutturazioni · Nuove costruzioni',
      description: 'Rimozione totale di polvere edile, calcinacci e residui. Spazio consegnato pronto ad abitare.',
      benefits: ['Rimozione polvere ultra-fine', 'Pulizia serramenti e infissi', 'Trattamento pavimenti nuovi', 'Smaltimento rifiuti incluso'],
      howItWorks: 'Fine lavori → interveniamo entro 24h → pulizia in fasi → spazio impeccabile.',
      image: imgPostRistrutturazione,
    },
    {
      id: 6,
      title: 'Manutenzione Quotidiana',
      badge: 'Abbonamento',
      badgeColor: 'bg-yellow-500',
      forWho: 'Privati · Aziende · Condomini · B&B',
      description: 'Un abbonamento flessibile che ti toglie ogni pensiero. Pulizia programmata, puntuale, senza sorprese.',
      benefits: ['Frequenza personalizzabile', 'Stesso operatore sempre', 'Prezzo bloccato annuale', 'Disdetta senza penali'],
      howItWorks: 'Scegli la frequenza → fissiamo il calendario → il tuo operatore arriva sempre puntuale.',
      image: imgQuotidiana,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">I Nostri Servizi</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pulizia professionale per ogni esigenza</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Dalla casa all'ospedale, dal negozio al cantiere: ogni intervento è gestito da operatori certificati con prodotti professionali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col"
            >
              {/* Immagine con badge */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 left-3 ${service.badgeColor} text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full`}>
                  {service.badge}
                </span>
              </div>

              {/* Contenuto */}
              <div className="p-5 flex-1 flex flex-col gap-4">

                {/* Titolo + per chi */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-xs text-blue-600 font-semibold flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {service.forWho}
                  </p>
                </div>

                {/* Descrizione */}
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

                {/* Benefici */}
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">✅ Cosa ottieni</p>
                  <ul className="space-y-1.5">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Come funziona */}
                <div className="bg-blue-50 rounded-xl px-4 py-3 border-l-4 border-blue-400">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">Come funziona</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{service.howItWorks}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  Richiedi Preventivo Gratuito
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner inferiore */}
        <div className="mt-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Non trovi il servizio che cerchi?</h3>
            <p className="text-blue-100 text-sm">Ogni situazione è unica — contattaci per una soluzione su misura.</p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 text-sm whitespace-nowrap"
          >
            Parla con un Esperto →
          </button>
        </div>
      </div>
    </section>
  );
}
