<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Pulizie Ecosolution - Istruzioni per lo Sviluppo

Questo è un sito web per una ditta di pulizie a Milano realizzato con React, Vite e Tailwind CSS.

## Stack Tecnologico
- **React**: Per la UI e la logica dei componenti
- **Vite**: Build tool ad alte prestazioni
- **Tailwind CSS**: Styling utility-first
- **JavaScript/JSX**: Linguaggio principale

## Struttura del Progetto

```
src/
├── components/      # Componenti React riutilizzabili
├── pages/          # Pagine dell'applicazione
├── layouts/        # Layout e template
├── hooks/          # Custom React hooks
├── utils/          # Funzioni helper
├── constants/      # Costanti dell'app
├── assets/         # Immagini, icone, logo
│   ├── images/
│   ├── icons/
│   └── logo/
└── styles/         # CSS personalizzati aggiuntivi
```

## Convenzioni di Codice

### Componenti
- Tutti i componenti vanno in `src/components/`
- Usare nomi in PascalCase per i file (es: `Header.jsx`)
- Preferire componenti funzionali
- Esportare tutti i componenti da `src/components/index.js`

### Styling
- Usare Tailwind CSS per lo styling primario
- Le classi custom sono definite in `src/index.css` nel layer `@layer components`
- Evitare CSS file individuali quando possibile
- Per styles globali, aggiungerli in `src/index.css`

### Colori
- **Primary**: Blu (sky) - per elementi principali, call-to-action
- **Secondary**: Grigio (slate) - per testo secondario, border
- Estensioni disponibili nel `tailwind.config.js`

### Componenti di Bottoni
- `.btn-primary` - Per call-to-action principali
- `.btn-secondary` - Per azioni secondarie

### Layout
- `.container-custom` - Container con max-width e padding responsive
- `.section-padding` - Padding verticale standard per sezioni

## Sviluppo

- Dev server: `npm run dev` (port 5173)
- Build: `npm run build`
- Preview build: `npm run preview`

## Note per Copilot

- Quando crei nuovi componenti, ricordati di esportarli da `src/components/index.js`
- Usa sempre le classi Tailwind per lo styling
- I componenti devono essere responsive per mobile, tablet e desktop
- Mantieni il codice pulito e ben documentato
