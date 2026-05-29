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
  { name: 'Federica B.', location: 'Milano Centro', ago: '2 settimane fa', text: 'Casa impeccabile dopo 3 mesi di lavori. Squadra puntuale e precisa, hanno rimosso ogni traccia di polvere e calce.', rating: 5, img: pd1, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face' },
  { name: 'Luca M.', location: 'Monza', ago: '1 mese fa', text: 'Professionali e veloci. In un giorno hanno pulito 90 mq di cantiere come se fosse nuovo. Consigliatissimi!', rating: 5, img: pd2, avatar: null },
  { name: 'Sara T.', location: 'Sesto San Giovanni', ago: '3 settimane fa', text: 'Ho chiamato alle 9, alle 14 erano già da me. Risultato strepitoso, bagni sanificati perfettamente.', rating: 5, img: pd3, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face' },
  { name: 'Marco R.', location: 'Cinisello Balsamo', ago: '2 mesi fa', text: 'Prezzo onesto e lavoro eccellente. Nessuna sorpresa in fattura, tutto come concordato.', rating: 5, img: pd4, avatar: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=64&h=64&fit=crop' },
  { name: 'Giulia P.', location: 'Segrate', ago: '1 settimana fa', text: 'Li uso per ogni ristrutturazione che seguo. I miei clienti restano sempre sorpresi dalla qualità. Top!', rating: 5, img: pd5, avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=64&h=64&fit=crop' },
];

// BLOCCO 1: Checklist benefit-driven
const detailedChecklist = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
    ),
    bg: 'bg-amber-50', border: 'border-amber-100', iconBg: 'bg-amber-100', iconColor: 'text-amber-500',
    title: 'Niente più starnuti da polvere',
    description: 'Aspiriamo ogni angolo con macchinari industriali filtranti — anche polveri sottili invisibili che irritano le vie respiratorie e si depositano sui mobili nuovi.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
    ),
    bg: 'bg-sky-50', border: 'border-sky-100', iconBg: 'bg-sky-100', iconColor: 'text-sky-500',
    title: 'Pavimenti pronti subito',
    description: 'Rimuoviamo calce, cemento e residui incrostati senza rigare le superfici. Parquet, gres, marmo: ogni materiale trattato col prodotto giusto.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
    ),
    bg: 'bg-emerald-50', border: 'border-emerald-100', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-500',
    title: 'Casa abitabile dal giorno dopo',
    description: 'Puliamo infissi, finestre, binari e serrande — così puoi aprire le finestre senza sporcare e iniziare subito a montare i mobili.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
    bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-100', iconColor: 'text-purple-500',
    title: 'Bagni igienizzati al 100%',
    description: 'Sanitari, fughe, piastrelle e docce con prodotti sanificanti professionali. Zero calcare, zero muffe, zero batteri residui dal cantiere.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
    ),
    bg: 'bg-rose-50', border: 'border-rose-100', iconBg: 'bg-rose-100', iconColor: 'text-rose-500',
    title: 'Nessun dettaglio lasciato indietro',
    description: 'Cornici, battiscopa, porte, maniglie e angoli ciechi: puliamo tutto quello che un\'impresa generica salta. Lo vedi nel risultato finale.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
    ),
    bg: 'bg-teal-50', border: 'border-teal-100', iconBg: 'bg-teal-100', iconColor: 'text-teal-500',
    title: 'Prodotti sicuri per tutta la famiglia',
    description: 'Usiamo detergenti professionali a basso impatto chimico, sicuri anche nelle case con bambini piccoli o animali domestici.',
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
    question: 'Avete tariffe dedicate per agenzie immobiliari o ditte edili?',
    answer: 'Sì. Con agenzie immobiliari, imprese di ristrutturazione e property manager che ci affidano più cantieri nel tempo, costruiamo accordi personalizzati: prezzi riservati, priorità nelle disponibilità e fatturazione semplificata. Scrivici su WhatsApp per parlarne senza impegno.'
  },
  {
    question: 'Che garanzie date sul lavoro svolto?',
    answer: 'Se riscontri imperfezioni entro 3 giorni, tornaremo a ritoccare gratis. Vogliamo che tu sia 100% soddisfatto.'
  },
];

const tiers = {
  base: {
    label: 'Pulizia Essenziale',
    badge: 'Essenziale',
    badgeColor: 'bg-sky-100 text-sky-700',
    accentColor: 'sky',
    price: '€ 350',
    originalPrice: '€ 490',
    unit: 'a partire da',
    forWho: 'Per chi ha fatto imbiancatura, piccoli lavori o vuole una pulizia generale rapida.',
    promise: 'Casa pulita e abitabile — senza andare nel dettaglio millimetrico.',
    bullets: [
      { text: 'Casa respirabile subito — aspiriamo polveri fini da ogni superficie' },
      { text: 'Pavimenti lavabili dal primo giorno — calce e residui rimossi a mano' },
      { text: 'Niente sporco visibile — via calcinacci, imballaggi e residui grossolani' },
      { text: 'Bagni utilizzabili — pulizia base di sanitari e piastrelle' },
      { text: 'Finestre apribili senza rischio sporco — passata su infissi e davanzali' },
    ],
    notIncluded: ['Rimozione colla e silicone incrostati', 'Sanificazione a vapore', 'Trattamento pavimenti delicati (marmo, parquet)'],
  },
  fondo: {
    label: 'Pulizia a Fondo',
    badge: 'Chiavi in Mano',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    accentColor: 'emerald',
    price: '€ 550',
    originalPrice: '€ 770',
    unit: 'a partire da',
    forWho: 'Per chi ha fatto una ristrutturazione completa e vuole entrare in casa con i piedi nudi.',
    promise: 'Casa igienizzata al 100% — ogni angolo, ogni fessura, ogni superficie.',
    bullets: [
      { text: 'Tutto della Pulizia Essenziale — inclusa ogni polvere di cantiere' },
      { text: 'Colla, silicone e stucco eliminati — superfici lisce come il primo giorno' },
      { text: 'Bagni sanificati a vapore — zero batteri, zero calcare, zero odori' },
      { text: 'Vetri e infissi a specchio — pulizia profonda di binari e maniglie' },
      { text: 'Pavimenti delicati trattati senza rischi — parquet, marmo e gres con prodotti dedicati' },
      { text: 'Cucina igienizzata completa — piani, elettrodomestici e ante senza traccia di cantiere' },
    ],
    notIncluded: [],
  },
};

const pricingRows = {
  residenziale: [
    { icon: '🛏️', label: 'Monolocale', sub: 'fino a 45 mq', base: '€ 350', baseOrig: '€ 490', fondo: '€ 550', fondoOrig: '€ 770' },
    { icon: '🏠', label: 'Bilocale', sub: '50 – 70 mq', base: '€ 480', baseOrig: '€ 670', fondo: '€ 750', fondoOrig: '€ 1.050', highlight: true },
    { icon: '🏡', label: 'Trilocale', sub: '80 – 100 mq', base: '€ 620', baseOrig: '€ 870', fondo: '€ 980', fondoOrig: '€ 1.370', highlight: true },
    { icon: '🏰', label: 'Quadrilocale / Villetta', sub: '110 – 140 mq', base: '€ 820', baseOrig: '€ 1.150', fondo: '€ 1.300', fondoOrig: '€ 1.820' },
  ],
  commerciale: [
    { icon: '💼', label: 'Ufficio small', sub: 'fino a 60 mq', base: '€ 400', baseOrig: '€ 560', fondo: '€ 620', fondoOrig: '€ 870' },
    { icon: '🏢', label: 'Ufficio medio', sub: '70 – 120 mq', base: '€ 580', baseOrig: '€ 810', fondo: '€ 900', fondoOrig: '€ 1.260', highlight: true },
    { icon: '🛍️', label: 'Negozio / Showroom', sub: '50 – 150 mq', base: '€ 520', baseOrig: '€ 730', fondo: '€ 850', fondoOrig: '€ 1.190', highlight: true },
    { icon: '🏗️', label: 'Capannone / Locale grande', sub: 'oltre 150 mq', base: 'Su misura', baseOrig: null, fondo: 'Su misura', fondoOrig: null },
  ],
};

export default function PostRistrutturazioneMilano() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0);
  const [selectedTier, setSelectedTier] = useState('base');
  const [visible, setVisible] = useState(true);
  const [pricingCategory, setPricingCategory] = useState('residenziale');

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
                  {/* Testo recensione */}
                  <p className="text-white/90 text-xs leading-relaxed line-clamp-2 mb-3">"{r.text}"</p>
                  {/* Nome + stelle + tempo */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {r.avatar ? (
                        <img src={r.avatar} alt={r.name} className="w-7 h-7 rounded-full object-cover ring-2 ring-white/30 flex-shrink-0" />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 ring-2 ring-white/30">
                          {r.name[0]}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-white font-bold text-xs leading-tight">{r.name}</p>
                          <div className="flex gap-0.5">
                            {[...Array(r.rating)].map((_, j) => (
                              <svg key={j} className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                            ))}
                          </div>
                        </div>
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
            <h1 className="text-[1.6em] sm:text-4xl font-bold tracking-[-0.06em] leading-snug mb-4 text-gray-900">
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Pulizie Post Ristrutturazione a Milano
              </span>{' '}
              e Provincia - entro 24 ore
            </h1>
            <p className="text-sm text-gray-400 font-medium tracking-wide">
              <svg className="inline w-4 h-4 text-emerald-500 mr-1 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{display:'inline'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Garanzia 100% soddisfatti:{' '}
              <span className="text-gray-800 font-bold">ritorniamo gratis entro 3 giorni.</span>*
            </p>
          </div>

          {/* Badge – Pronto Intervento */}
          <div className="mb-6 flex flex-col items-center gap-3">

            {/* Badge principale */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-emerald-200 shadow-md shadow-emerald-50 rounded-2xl px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-gray-500 font-medium text-md tracking-[-0.07em]">
                Prima disponibilità:
              </span>
              <span className="w-px h-4 bg-gray-200 shrink-0" />
              <span className="flex items-center gap-1 bg-emerald-500/50 text-white text-md tracking-[-0.07em] font-medium px-2.5 py-1 rounded-full leading-none">
                 {(() => {
                  const d = new Date();
                  d.setDate(d.getDate() + 1);
                  const giorno = d.toLocaleDateString('it-IT', { weekday: 'long' }).slice(0, 3);
                  const data = d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' });
                  return giorno + ' ' + data;
                })()}
              </span>
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

          {/* Toggle Tier – segmented control */}
          <div className="mt-2 mb-6 bg-gray-100 rounded-2xl p-1 flex relative">
            {/* Slider indicator */}
            <div
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-white shadow-sm transition-transform duration-300 ease-in-out"
              style={{ transform: selectedTier === 'fondo' ? 'translateX(calc(100% + 8px))' : 'translateX(0)' }}
            />
            {Object.entries(tiers).map(([key, t]) => (
              <button
                key={key}
                onClick={() => handleTierChange(key)}
                className={`relative flex-1 py-2.5 z-10 text-sm font-bold rounded-xl transition-colors duration-200 ${
                  selectedTier === key ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {key === 'fondo' && (
                  <span className="absolute -top-2 -right-1 bg-amber-400 text-amber-900 text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full leading-none">
                    PRO
                  </span>
                )}
                {t.label}
              </button>
            ))}
          </div>

          {/* Card Pacchetto – redesign premium */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(10px)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            {(() => {
              const t = tiers[selectedTier];
              const isFondo = selectedTier === 'fondo';
              return (
                <div className={`rounded-2xl border-2 overflow-hidden ${isFondo ? 'border-emerald-300' : 'border-sky-200'}`}>

                  {/* Header card con immagine */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={selectedTier === 'base' ? imgBase : imgFondo}
                      alt={t.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Badge pacchetto */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-black px-3 py-1 rounded-full ${t.badgeColor}`}>
                        {t.badge}
                      </span>
                    </div>
                    {/* Prezzo in alto a destra */}
                    <div className="absolute top-3 right-3">
                      <div className={`rounded-xl px-3 py-1.5 text-right ${isFondo ? 'bg-emerald-600' : 'bg-sky-600'}`}>
                        <div className="text-[9px] font-semibold uppercase tracking-wide leading-none mb-0.5 text-white/70">{t.unit}</div>
                        <div className="text-xs font-bold text-red-300 line-through leading-none">{t.originalPrice}</div>
                        <div className="text-xl font-black text-white leading-none">{t.price}</div>
                      </div>
                    </div>
                    {/* Nome pacchetto in basso sull'immagine */}
                    <div className="absolute bottom-3 left-3">
                      <h3 className="text-white font-black text-lg leading-none">{t.label}</h3>
                    </div>
                  </div>

                  {/* Body card */}
                  <div className={`p-4 ${isFondo ? 'bg-emerald-50/50' : 'bg-sky-50/40'}`}>

                    {/* Per chi è */}
                    <div className={`mb-4 rounded-xl px-3 py-2.5 border ${isFondo ? 'bg-emerald-50 border-emerald-200' : 'bg-sky-50 border-sky-200'}`}>
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isFondo ? 'text-emerald-600' : 'text-sky-600'}`}>👤 Ideale per</p>
                      <p className="text-xs text-gray-700 leading-snug font-medium">{t.forWho}</p>
                    </div>

                    {/* Promessa */}
                    <p className="text-[11px] text-gray-500 italic mb-3 leading-snug">
                      💬 "{t.promise}"
                    </p>

                    {/* Lista inclusi */}
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">✅ Cosa è incluso</p>
                    <ul className="space-y-2 mb-3">
                      {t.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-sm text-gray-700 leading-snug">{b.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Non incluso (solo per Base) */}
                    {t.notIncluded.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">❌ Non incluso</p>
                        <ul className="space-y-1">
                          {t.notIncluded.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                              <span className="w-3 h-px bg-gray-300 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 text-[11px] text-sky-600 font-semibold">
                          → Vuoi tutto incluso? Scegli <button onClick={() => handleTierChange('fondo')} className="underline font-bold">Pulizia a Fondo</button>
                        </p>
                      </div>
                    )}

                  </div>
                </div>
              );
            })()}
          </div>

          {/* Tabella Prezzi */}
          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3 text-center">
              Listino prezzi · Milano · immobile vuoto
            </p>

            {/* Tab switcher Residenziale / Commerciale */}
            <div className="flex rounded-xl border border-gray-200 overflow-hidden mb-3 text-xs font-bold">
              {[
                { key: 'residenziale', label: '🏠 Residenziale' },
                { key: 'commerciale', label: '🏢 Commerciale' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setPricingCategory(key)}
                  className={`flex-1 py-2 transition-colors ${
                    pricingCategory === key
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {pricingRows[pricingCategory].map((row, i) => {
                const activePrice = selectedTier === 'base' ? row.base : row.fondo;
                const origPrice = selectedTier === 'base' ? row.baseOrig : row.fondoOrig;
                const isHighlight = row.highlight;
                const isSuMisura = activePrice === 'Su misura';
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
                      {isSuMisura ? (
                        <div>
                          <div className="text-sm font-black text-gray-700">Su misura</div>
                          <div className="text-[9px] text-gray-400">preventivo gratuito</div>
                        </div>
                      ) : (
                        <>
                          <div className="text-[9px] text-gray-400 font-medium mb-0.5">a partire da</div>
                          {origPrice && <div className="text-sm font-bold text-red-500 line-through leading-none mb-0.5">{origPrice}</div>}
                          <div className={`text-lg font-black ${isHighlight ? 'text-emerald-600' : 'text-gray-800'}`}>
                            {activePrice}
                          </div>
                          {isHighlight && (
                            <div className="text-[9px] text-emerald-500 font-semibold">Più richiesto</div>
                          )}
                        </>
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
            {/* Micro-banner garanzia */}
            <div className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
              <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <p className="text-xs text-emerald-800 font-semibold">
                Non sei soddisfatto? <strong>Ritorniamo gratis entro 3 giorni.</strong>
              </p>
            </div>
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
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Perché sceglierci
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
              Cosa cambia davvero dopo il nostro intervento
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Non vendiamo solo "pulizia". Ti consegniamo una casa in cui puoi entrare subito — senza starnuti, senza problemi, senza rimpianti.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {detailedChecklist.map((item, i) => (
              <div key={i} className={`flex items-start gap-4 border rounded-2xl px-5 py-4 shadow-sm ${item.bg} ${item.border}`}>
                <div className={`mt-0.5 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-snug">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Banner garanzia */}
          <div className="mt-8 bg-gray-950 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-3xl flex-shrink-0">🛡️</div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm mb-0.5">Garanzia soddisfazione 3 giorni</p>
              <p className="text-gray-400 text-xs">Se entro 3 giorni trovi qualcosa che non va, torniamo a ritoccare gratis. Senza discussioni.</p>
            </div>
            <a
              href="https://wa.me/393342221212?text=Ciao,%20vorrei%20un%20preventivo%20per%20pulizia%20post%20ristrutturazione."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Prenota ora →
            </a>
          </div>
        </div>
      </section>

      {/* BLOCCO CANTIERI REALI */}
      <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container-custom max-w-2xl mx-auto px-6 mb-8 text-center">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Consegnato su una media di 1-2 giorni
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Lavori su Milano e provincia
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

      {/* BLOCCO 3: Come Funziona – redesign premium */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Il nostro processo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Da cantiere sporco a casa{' '}
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                pronta in 3 passi
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Semplice, veloce, senza sorprese. Ecco come lavoriamo.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">

            {/* Linea verticale mobile */}
            <div className="sm:hidden absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-200 via-emerald-200 to-blue-200" />
            {/* Linea orizzontale desktop */}
            <div className="hidden sm:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

              {/* STEP 1 */}
              <div className="relative flex sm:flex-col items-start sm:items-center gap-5 sm:gap-0 sm:text-center">
                {/* Numero */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                    <span className="text-blue-600 font-black text-[10px]">1</span>
                  </div>
                </div>
                {/* Contenuto */}
                <div className="sm:mt-5">
                  <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 sm:mb-3">
                    ⚡ Risposta in 1h
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5 leading-snug">Contattaci</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Scrivi su WhatsApp o chiama. Descrivi brevemente i lavori fatti — risponderemo entro un'ora con una stima indicativa.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative flex sm:flex-col items-start sm:items-center gap-5 sm:gap-0 sm:text-center">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-200 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center">
                    <span className="text-emerald-600 font-black text-[10px]">2</span>
                  </div>
                </div>
                <div className="sm:mt-5">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 sm:mb-3">
                    🆓 Gratis
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5 leading-snug">Foto o sopralluogo</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Mandaci foto del cantiere via WhatsApp oppure veniamo noi da te gratuitamente. Preventivo chiaro e definitivo, senza sorprese.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative flex sm:flex-col items-start sm:items-center gap-5 sm:gap-0 sm:text-center">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-200 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border-2 border-sky-500 flex items-center justify-center">
                    <span className="text-sky-600 font-black text-[10px]">3</span>
                  </div>
                </div>
                <div className="sm:mt-5">
                  <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 sm:mb-3">
                    🚀 24–48h
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1.5 leading-snug">Squadra al lavoro</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    La nostra squadra arriva entro 24–48 ore e lascia la tua casa impeccabile. Pulizia completa, pronta per i mobili.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CTA banner sotto */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-100">
            <div>
              <p className="text-white font-bold text-base sm:text-lg leading-snug">Pronto a iniziare?</p>
              <p className="text-white/70 text-sm mt-0.5">Sopralluogo gratuito · Nessun obbligo</p>
            </div>
            <a
              href="https://wa.me/393342221212?text=Ciao,%20vorrei%20un%20preventivo%20per%20pulizia%20post%20ristrutturazione%20a%20Milano."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white text-blue-600 font-bold px-6 py-3 rounded-xl text-sm shadow hover:shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.882a.5.5 0 00.61.61l6.025-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.031-1.385l-.36-.214-3.733.914.932-3.64-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              Inizia ora su WhatsApp
            </a>
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
             Nessun impegno · Preventivo gratuito · Promo estate -20% fino al 30 luglio
          </p>
        </div>
      </section>

      {/* FLOATING FOOTER MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-2xl px-3 pt-2.5 pb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <a
            href="https://wa.me/393342221212?text=Ciao,%20vorrei%20un%20preventivo%20per%20pulizia%20post%20ristrutturazione%20a%20Milano."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-1.5 shadow-md"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.882a.5.5 0 00.61.61l6.025-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.031-1.385l-.36-.214-3.733.914.932-3.64-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            WhatsApp
          </a>
          <a
            href="tel:+393342221212"
            className="flex-1 border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-1.5"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Chiama
          </a>
        </div>
        <p className="text-center text-[10px] text-gray-400">Preventivo gratis · nessun impegno</p>
      </div>

      {/* Spacer per floating bar su mobile */}
      <div className="h-20 sm:hidden" />

      <Footer />

      {/* NOTE LEGALI GARANZIA */}
      <div className="bg-gray-50 border-t border-gray-100 py-5 px-6">
        <p className="max-w-2xl mx-auto text-[10px] text-gray-400 leading-relaxed text-center">
          * La garanzia di ritorno gratuito entro 3 giorni si applica in presenza di motivi oggettivi e verificabili: aree non pulite concordate nel preventivo, presenza evidente di polvere di cantiere rimasta su superfici accessibili, sanitari o pavimenti non trattati. Non copre situazioni causate da interventi successivi al nostro lavoro (es. ulteriori lavori edili, trasporto mobili), sporco ricomparso per cause esterne, o aspettative non comunicate in fase di sopralluogo. In caso di contestazione, valutiamo insieme il problema e troviamo sempre una soluzione ragionevole.
        </p>
      </div>
    </div>
  );
}
