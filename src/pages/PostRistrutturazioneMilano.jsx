import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgBase from '../assets/images/servizi images/pulizia base.webp';
import imgFondo from '../assets/images/servizi images/pulizia a fondo.webp';
import pd1 from '../assets/images/servizi images/primadopo/primadopo1.webp';
import pd2 from '../assets/images/servizi images/primadopo/primadopo2.webp';
import pd3 from '../assets/images/servizi images/primadopo/primadopo3.webp';
import pd4 from '../assets/images/servizi images/primadopo/primadopo4.webp';
import pd5 from '../assets/images/servizi images/primadopo/primadopo5.webp';
import pd6 from '../assets/images/servizi images/primadopo/primadopo6.webp';
import pd7 from '../assets/images/servizi images/primadopo/primadopo7.webp';
import pd8 from '../assets/images/servizi images/primadopo/primadopo8.webp';

const caroselloImgs = [pd1, pd2, pd3, pd4, pd5, pd6, pd7, pd8];

const googleReviews = [
  { name: 'Federica B.', location: 'Milano Centro', ago: '2 settimane fa', text: 'Casa impeccabile dopo 3 mesi di lavori. Squadra puntuale e precisa, hanno rimosso ogni traccia di polvere e calce.', rating: 5, img: pd1 },
  { name: 'Luca M.', location: 'Monza', ago: '1 mese fa', text: 'Professionali e veloci. In un giorno hanno pulito 90 mq di cantiere come se fosse nuovo. Consigliatissimi!', rating: 5, img: pd2 },
  { name: 'Sara T.', location: 'Sesto San Giovanni', ago: '3 settimane fa', text: 'Ho chiamato alle 9, alle 14 erano già da me. Risultato strepitoso, bagni sanificati perfettamente.', rating: 5, img: pd3 },
  { name: 'Marco R.', location: 'Cinisello Balsamo', ago: '2 mesi fa', text: 'Prezzo onesto e lavoro eccellente. Nessuna sorpresa in fattura, tutto come concordato.', rating: 5, img: pd4 },
  { name: 'Giulia P.', location: 'Segrate', ago: '1 settimana fa', text: 'Li uso per ogni ristrutturazione che seguo. I miei clienti restano sempre sorpresi dalla qualità. Top!', rating: 5, img: pd5 },
];

// BLOCCO 1: Checklist dettagliata
const detailedChecklist = [
  {
    title: 'Aspirazione professionale',
    description: 'Rimozione della polvere di cantiere usando aspiratori professionali ad alta potenza'
  },
  {
    title: 'Sgrassaggio pavimenti',
    description: 'Pulizia profonda di residui di cemento, calce e sporco su tutti i tipi di pavimentazione'
  },
  {
    title: 'Pulizia infissi e binari',
    description: 'Sgrassatura e igienizzazione di finestre, porte e binari delle scorrevoli'
  },
  {
    title: 'Rimozione colla e silicone',
    description: 'Eliminazione sicura di residui di colla, silicone e stucco dai pavimenti e dalle pareti'
  },
  {
    title: 'Igienizzazione bagni',
    description: 'Sanificazione completa di sanitari, piastrelle e zone critiche con prodotti specifici'
  },
  {
    title: 'Pulizia porte, cornici e battiscopa',
    description: 'Detergenza totale di tutti i dettagli costruttivi e finiture'
  },
];

// BLOCCO 2: Galleria cantieri reali – stessa posizione del carosello recensioni
const cantieri = [
  { img: pd1, location: 'Milano Centro', ago: '2 settimane fa' },
  { img: pd2, location: 'Monza', ago: '1 mese fa' },
  { img: pd3, location: 'Sesto San Giovanni', ago: '3 settimane fa' },
  { img: pd4, location: 'Cinisello Balsamo', ago: '2 mesi fa' },
  { img: pd5, location: 'Segrate', ago: '1 settimana fa' },
  { img: pd6, location: 'Cologno Monzese', ago: '5 settimane fa' },
  { img: pd7, location: 'Vimodrone', ago: '3 mesi fa' },
  { img: pd8, location: 'Pioltello', ago: '10 giorni fa' },
];

// BLOCCO 3: Processo in 3 Step
const processSteps = [
  {
    step: '1',
    title: 'Contatto WhatsApp/Telefono',
    description: 'Scrivi a noi oppure chiama direttamente. Descrivi il tuo lavoro di ristrutturazione.',
  },
  {
    step: '2',
    title: 'Sopralluogo gratuito',
    description: 'Visitiamo il cantiere, valutiamo l\'entità del lavoro e ti diamo un preventivo chiaro.',
  },
  {
    step: '3',
    title: 'Squadra in 48h',
    description: 'Pulizia completa eseguita da professionisti. Casa pronta a ricevere i mobili.',
  },
];



// BLOCCO 5: Testimonianze (placeholder)
const testimonials = [
  {
    name: 'Marco R.',
    role: 'Proprietario Milano',
    text: 'Incredibile! Hanno ripulito completamente la casa dopo la ristrutturazione in una sola giornata. Professionali e veloci.',
    rating: 5,
  },
  {
    name: 'Giulia M.',
    role: 'Agente Immobiliare',
    text: 'Li uso sempre per i miei appartamenti dopo i lavori. I clienti rimangono sempre sorpresi dalla qualità. Consigliato!',
    rating: 5,
  },
  {
    name: 'Andrea S.',
    role: 'Imprenditore Como',
    text: 'Ufficio completamente rigenerato in 48 ore. Non ha lasciato traccia di polvere. Perfetti!',
    rating: 5,
  },
];

// BLOCCO 6: FAQ
const faqs = [
  {
    question: 'Quanto tempo ci vuole per pulire una casa post-ristrutturazione?',
    answer: 'Dipende dalla metratura e dalla tipologia di lavori eseguiti. In media: 60-80 mq in una giornata intera. Diamo sempre una stima precisa dopo il sopralluogo.'
  },
  {
    question: 'Portate i vostri prodotti o devo fornirli io?',
    answer: 'Portiamo noi tutto! Usiamo detergenti professionali specifici per ogni tipo di pavimento e superficie. Nessun costo aggiuntivo.'
  },
  {
    question: 'Quando potete venire?',
    answer: 'Chiamaci e organizziamo insieme. Per interventi urgenti possiamo inviare una squadra anche in giornata o il giorno dopo. '
  },
  {
    question: 'Potete pulire diverse zone di Milano nella stessa giornata?',
    answer: 'Assolutamente! Abbiamo più squadre. Coordinamento facile via WhatsApp o telefono.'
  },
  {
    question: 'Offrite sconti per grandi metrature o ristrutturazioni commerciali?',
    answer: 'Sì, per edifici di grandi dimensioni o cantieri prolungati, personalizziamo preventivi vantaggiosi. Contattaci per informazioni.'
  },
  {
    question: 'Che garanzie date sul lavoro svolto?',
    answer: 'Se riscontri imperfezioni entro 3 giorni, tornaremo a ritoccare gratis. Vogliamo che tu sia 100% soddisfatto.'
  },
];

const tiers = {
  base: {
    label: 'Pulizia Base',
    badge: "L'Essenziale",
    badgeColor: 'bg-sky-100 text-sky-700',
    price: '€ 350',
    originalPrice: '€ 490',
    unit: 'a partire da',
    subtitle: 'Ideale per imbiancature e rinfrescate. Perfetto se vuoi finire i dettagli da solo.',
    bullets: [
      'Aspirazione meccanica polveri sottili da cantiere',
      'Primo lavaggio e sgrassatura pavimenti',
      'Rimozione calcinacci e residui grossolani',
    ],
  },
  fondo: {
    label: 'Pulizia a Fondo',
    badge: 'Chiavi in Mano',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    price: '€ 550',
    originalPrice: '€ 770',
    unit: 'a partire da',
    subtitle: 'Ideale per ristrutturazioni totali. Casa igienizzata e pronta per entrarci a piedi nudi.',
    bullets: [
      'Pulizia vetri, infissi e rimozione silicone/colle',
      'Sanificazione a vapore di tutti i bagni',
      'Trattamento specifico pavimenti (parquet / marmo / gres)',
    ],
  },
};

const pricingRows = [
  { icon: '🛏️', label: 'Monolocale / Ufficio', sub: 'fino a 45 mq', base: '€ 350', baseOrig: '€ 490', fondo: '€ 550', fondoOrig: '€ 770' },
  { icon: '🏠', label: 'Bilocale', sub: '50 – 70 mq', base: '€ 480', baseOrig: '€ 670', fondo: '€ 750', fondoOrig: '€ 1.050', highlight: true },
  { icon: '🏡', label: 'Trilocale', sub: '80 – 100 mq', base: '€ 620', baseOrig: '€ 870', fondo: '€ 980', fondoOrig: '€ 1.370', highlight: true },
  { icon: '🏰', label: 'Quadrilocale / Villetta', sub: '110 – 140 mq', base: '€ 820', baseOrig: '€ 1.150', fondo: '€ 1.300', fondoOrig: '€ 1.820' },
];

export default function PostRistrutturazioneMilano() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0);
  const [selectedTier, setSelectedTier] = useState('base');
  const [visible, setVisible] = useState(true);

  const handleTierChange = (key) => {
    if (key === selectedTier) return;
    setVisible(false);
    setTimeout(() => {
      setSelectedTier(key);
      setVisible(true);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* STICKY BAR SUPERIORE – Urgenza + Offerta */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-center gap-2 text-center">
        <span className="text-yellow-400 text-base">🎁</span>
        <span>
          <strong>Sopralluogo gratuito + Sanificazione a vapore bagno in omaggio</strong>
          {' '}— Solo per le prime <strong>8 richieste</strong> di maggio a Milano
        </span>
        <a
          href="https://wa.me/393342221212?text=Ciao,%20vorrei%20approfittare%20della%20promo%20sopralluogo%20gratuito."
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 shrink-0 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-3 py-1 rounded-full text-xs transition-colors"
        >
          Prenota
        </a>
      </div>

      <Header />

      {/* GOOGLE REVIEWS BADGE + CAROSELLO RECENSIONI – sopra l'hero */}
      <div className="bg-white pt-28 sm:pt-32 pb-4 overflow-hidden">
        
        {/* Carosello recensioni con foto */}
        <div className="overflow-hidden">
          <div className="animate-scroll-infinite flex gap-4 w-max">
            {[...googleReviews, ...googleReviews].map((r, i) => (
              <div key={i} className="w-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 relative">
                <div className="h-64 overflow-hidden">
                  <img src={r.img} alt={`Cantiere ${r.name}`} className="w-full h-full object-cover" />
                </div>
                {/* Overlay scuro dal basso */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                {/* Badge Google in alto a destra */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1.5">
                    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                    <span className="text-white text-[10px] font-bold">Google</span>
                  </div>
                </div>
                {/* Testo overlay in basso */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                  {/* Stelle */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(r.rating)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  {/* Testo recensione */}
                  <p className="text-white/90 text-xs leading-relaxed line-clamp-2 mb-2">"{r.text}"</p>
                  {/* Nome + location + tempo */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-bold text-xs leading-tight">{r.name}</p>
                        <p className="text-white/60 text-[10px] leading-tight">📍 {r.location}</p>
                      </div>
                    </div>
                    <p className="text-white/60 text-[10px] leading-tight shrink-0">{r.ago}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERO – Configuratore Prezzi Interattivo */}
      <section className="bg-white pt-6 pb-0 sm:py-14">
        <div className="max-w-sm mx-auto px-6 text-center">

          {/* Titolo */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-snug mb-4 text-gray-900">
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Pulizie Post Ristrutturazione a Milano
              </span>{' '}
              e Provincia
            </h1>
          </div>

          {/* Badge disponibilità immediata */}
          <div className="mb-5 flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-700">Disponibilità immediata</span>
            </div>
          </div>

          {/* Freccia + label */}
          <div className="mb-4 flex flex-col items-center gap-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              Scegli il pacchetto
            </p>
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Toggle Tier */}
          <div className="flex mt-2 mb-6 gap-2">
            {Object.entries(tiers).map(([key, t]) => (
              <button
                key={key}
                onClick={() => handleTierChange(key)}
                className={`relative flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                  selectedTier === key
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'
                    : 'border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600'
                }`}
              >
                {key === 'fondo' && (
                  <span className="absolute -top-2 -right-1.5 bg-amber-400 text-amber-900 text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full leading-none">
                    PRO
                  </span>
                )}
                {t.label}
              </button>
            ))}
          </div>

          {/* Card Visiva – una sola alla volta, con fade */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(10px)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            {(() => {
              const t = tiers[selectedTier];
              return (
                <>
                  <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 mb-3">
                    <img
                      src={selectedTier === 'base' ? imgBase : imgFondo}
                      alt={t.badge}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${t.badgeColor}`}>
                        {t.badge}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="bg-emerald-600 rounded-md px-2 py-1 text-right">
                        <div className="text-[9px] font-semibold uppercase tracking-wide leading-none mb-1 text-emerald-200">{t.unit}</div>
                        <div className="text-base font-bold text-red-300 line-through leading-none mb-0.5">{t.originalPrice}</div>
                        <div className="text-2xl font-bold text-white leading-none">{t.price}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3 leading-snug">{t.subtitle}</p>
                  <ul className="text-left space-y-1.5 mb-4">
                    {t.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </>
              );
            })()}
          </div>

          {/* Tabella Prezzi */}
          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3 text-center">
              Listino prezzi · Milano · immobile vuoto
            </p>
            <div className="space-y-2">
              {pricingRows.map((row, i) => {
                const activePrice = selectedTier === 'base' ? row.base : row.fondo;
                const origPrice = selectedTier === 'base' ? row.baseOrig : row.fondoOrig;
                const isHighlight = row.highlight;
                return (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                      isHighlight
                        ? 'border-emerald-300 bg-emerald-50'
                        : 'border-gray-100 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl leading-none">{row.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{row.label}</div>
                        <div className="text-[10px] text-gray-400">{row.sub}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-gray-400 font-medium mb-0.5">a partire da</div>
                      <div className="text-sm font-bold text-red-500 line-through leading-none mb-0.5">{origPrice}</div>
                      <div className={`text-lg font-black ${isHighlight ? 'text-emerald-600' : 'text-gray-800'}`}>
                        {activePrice}
                      </div>
                      {isHighlight && (
                        <div className="text-[9px] text-emerald-500 font-semibold">Più richiesto</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-[10px] text-center text-gray-400">
              Preventivo preciso via WhatsApp con foto · nessun impegno
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 mb-8 flex flex-col gap-3">
            <a
              href="https://wa.me/393342221212?text=Ciao,%20vorrei%20un%20preventivo%20per%20pulizia%20post%20ristrutturazione%20a%20Milano."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl text-base shadow-lg flex items-center justify-center gap-2 hover:shadow-green-400/30 hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.882a.5.5 0 00.61.61l6.025-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.031-1.385l-.36-.214-3.733.914.932-3.64-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              Scrivi su WhatsApp
            </a>
            <a
              href="tel:+393342221212"
              className="w-full border-2 border-gray-200 text-gray-700 font-semibold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 hover:border-gray-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Chiama: +39 334 222 1212
            </a>
            <p className="text-xs text-gray-400">Nessun obbligo di acquisto</p>
          </div>

        </div>
      </section>





      {/* BLOCCO NUMERI TRUST */}
      <section className="py-10 bg-gray-950 border-t border-gray-800">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '450+', label: 'Cantieri completati' },
              { value: '4.9★', label: 'Rating Google' },
              { value: '15+', label: 'Anni di esperienza' },
              { value: '48h', label: 'Intervento garantito' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCCO CHECKLIST SERVIZI */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container-custom max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Cosa è incluso
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Ogni intervento comprende
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {detailedChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{item.title}</p>
                  <p className="text-[11px] text-gray-400 leading-snug mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCCO CANTIERI REALI */}
      <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container-custom max-w-2xl mx-auto px-6 mb-8 text-center">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            I nostri cantieri
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Lavori recenti su Milano e provincia
          </h2>
        </div>
        <div className="overflow-hidden">
          <div className="animate-scroll-infinite flex gap-4 w-max">
            {[...cantieri, ...cantieri].map((c, i) => (
              <div key={i} className="w-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 relative">
                <div className="h-64 overflow-hidden">
                  <img src={c.img} alt={`Cantiere ${c.location}`} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white/80 text-xs">📍</span>
                      <span className="text-white font-bold text-sm">{c.location}</span>
                    </div>
                    <span className="text-white/60 text-[11px]">{c.ago}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCCO 3: Processo in 3 Step */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
            Come funziona
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Tre semplici step per avere la casa pulita dopo la ristrutturazione
          </p>

          <div className="relative">
            {/* Linea di connessione (solo desktop) */}
            <div className="hidden sm:block absolute top-16 left-12 right-12 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center h-16 w-16 bg-blue-600 text-white rounded-full text-2xl font-bold shadow-lg border-4 border-white">
                    {step.step}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 pt-14 text-center border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      {/* BLOCCO AREE SERVITE */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container-custom max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Dove operiamo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Milano, provincia e dintorni
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Interveniamo in tutta l'area metropolitana di Milano, Monza e Como. Squadra disponibile in 48h ovunque nella zona.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Mappa */}
            <div className="w-full lg:flex-1 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                title="Aree servite Eco Solution Milano"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d178259.64490570566!2d9.18951!3d45.46427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1700000000000"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Lista comuni */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Comuni principali</p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1.5">
                {[
                  'Milano', 'Monza', 'Sesto San Giovanni', 'Cinisello Balsamo',
                  'Segrate', 'Cologno Monzese', 'Vimodrone', 'Pioltello',
                  'Cernusco s/N', 'Lentate sul Seveso', 'Carate Brianza', 'Como',
                ].map((comune, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {comune}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 mt-4 leading-snug">
                Non trovi il tuo comune? Contattaci — operiamo in tutta la provincia.
              </p>
              <a
                href="https://wa.me/393342221212?text=Ciao,%20opero%20a..."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                Chiedici per la tua zona →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCCO 6: FAQ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Hai qualche dubbio?
            </h2>
            <p className="text-gray-400 text-base">
              Le domande che ci fanno più spesso — con risposte dirette.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => {
              const isOpen = expandedFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : i)}
                    className="w-full py-5 flex items-start justify-between gap-4 text-left group"
                  >
                    <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
                      {faq.question}
                    </span>
                    <span className={`mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-200 ${isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 text-gray-400 group-hover:border-blue-400 group-hover:text-blue-500'}`}>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease, opacity 0.25s ease',
                    }}
                  >
                    <p className="pb-5 text-gray-500 text-sm leading-relaxed pr-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center bg-gray-50 rounded-2xl px-6 py-7 border border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Non hai trovato risposta? Scrivici direttamente.</p>
            <a
              href="https://wa.me/393342221212?text=Ciao,%20ho%20una%20domanda%20sulla%20pulizia%20post%20ristrutturazione."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-sm hover:shadow-green-300/40 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.882a.5.5 0 00.61.61l6.025-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.031-1.385l-.36-.214-3.733.914.932-3.64-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              Chiedici su WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* BLOCCO 7: CTA FINALE */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Hai appena ristrutturato?
          </h2>
          <p className="text-blue-100 mb-8 text-lg leading-relaxed">
            Non aspettare. Contattaci oggi stesso per un sopralluogo gratuito. La squadra può essere da te in 48 ore.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+393342221212"
              className="group relative overflow-hidden bg-white text-blue-600 font-bold px-10 py-4 rounded-xl text-base shadow-lg transition-all duration-200 hover:shadow-white/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Chiama adesso
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="https://wa.me/393342221212?text=Ciao,%20vorrei%20un%20preventivo%20per%20pulizia%20post%20ristrutturazione%20a%20Milano."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#25D366] text-white font-bold px-10 py-4 rounded-xl text-base shadow-lg transition-all duration-200 hover:shadow-green-500/30 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.882a.5.5 0 00.61.61l6.025-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.031-1.385l-.36-.214-3.733.914.932-3.64-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              WhatsApp
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          <p className="text-blue-200 text-xs mt-5">
            🔒 Nessun impegno · Preventivo gratuito · Promo estate -20% fino al 30 luglio
          </p>
        </div>
      </section>

      {/* FLOATING FOOTER MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex items-center gap-3">
        <a
          href="https://wa.me/393342221212?text=Ciao,%20vorrei%20un%20preventivo%20per%20pulizia%20post%20ristrutturazione%20a%20Milano."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.882a.5.5 0 00.61.61l6.025-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.031-1.385l-.36-.214-3.733.914.932-3.64-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
          Preventivo su WhatsApp
        </a>
        <div className="text-right shrink-0">
          <p className="text-[10px] text-gray-400 leading-tight">Nessun obbligo</p>
          <p className="text-[10px] text-gray-400 leading-tight">di acquisto</p>
        </div>
      </div>

      {/* Spacer per floating bar su mobile */}
      <div className="h-20 sm:hidden" />

      <Footer />
    </div>
  );
}
