# Pulizie Ecosolution - Sito Web

Sito web ufficiale della ditta di pulizie **Ecosolution** a Milano.

Realizzato con **React**, **Vite** e **Tailwind CSS** per prestazioni e user experience ottimali.

## 🚀 Tecnologie Utilizzate

- **React** 18+ - UI component library
- **Vite** 8+ - Build tool ad alte prestazioni
- **Tailwind CSS** 3+ - Utility-first CSS framework
- **JavaScript (ES6+)** - Linguaggio di programmazione

## 📁 Struttura del Progetto

```
src/
├── components/      # Componenti React riutilizzabili
├── pages/          # Pagine dell'applicazione
├── layouts/        # Layout e template principali
├── hooks/          # Custom React hooks
├── utils/          # Funzioni helper e utilità
├── constants/      # Costanti dell'applicazione
├── assets/         # Immagini, icone e loghi
├── styles/         # CSS personalizzati
└── index.css       # Stili globali e configurazione Tailwind
```

## 🛠️ Comandi Disponibili

### Avviare il server di sviluppo
```bash
npm run dev
```
Apre l'applicazione su `http://localhost:5173/`

### Compilare per la produzione
```bash
npm run build
```
Crea una build ottimizzata nella cartella `dist/`

### Anteprima della build
```bash
npm run preview
```
Visualizza localmente la build di produzione

### Lint del codice
```bash
npm run lint
```

## 📦 Installazione Dipendenze

Le dipendenze sono già installate. Se necessario, eseguire:
```bash
npm install
```

## 🎨 Tailwind CSS

Tailwind CSS è già configurato e pronto all'uso. I colori personalizzati sono definiti in `tailwind.config.js`:

- **Primary**: Blu (sky) - colore principale
- **Secondary**: Grigio (slate) - colore secondario

### Componenti Personalizzati

Disponibili in `src/index.css`:
- `.btn-primary` - Bottone primario
- `.btn-secondary` - Bottone secondario
- `.container-custom` - Container responsive
- `.section-padding` - Padding standard sezioni

## 📝 Linee Guida di Sviluppo

1. **Componenti**: Tutti in `src/components/` con naming PascalCase
2. **Styling**: Usare Tailwind CSS come primario
3. **Struttura**: Mantenere i file organizzati per features
4. **Esportazioni**: Esportare componenti dai file `index.js`

## 📞 Informazioni Aziendali

**Ecosolution** - Ditta di pulizie a Milano
- Servizi: Pulizie civili, industriali, specializzate
- Basato a: Milano, Italia
