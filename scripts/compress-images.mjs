import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const IMAGES_DIR = fileURLToPath(new URL('../src/assets/images', import.meta.url));
const EXTS = ['.jpg', '.jpeg', '.png', '.webp'];
const QUALITY = 72; // buona qualità, ottima compressione
const MAX_WIDTH = 1200; // max larghezza px

function getAllImages(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...getAllImages(full));
    } else if (EXTS.includes(extname(full).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

const images = getAllImages(IMAGES_DIR);
console.log(`\n🔍 Trovate ${images.length} immagini\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const imgPath of images) {
  const ext = extname(imgPath).toLowerCase();
  // Output: stesso percorso ma estensione .webp
  const outPath = imgPath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
  
  const sizeBefore = statSync(imgPath).size;
  totalBefore += sizeBefore;

  await sharp(imgPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outPath + '.tmp');

  // Sostituisci originale con versione compressa (rinomina il tmp)
  const { renameSync } = await import('fs');
  
  // Se il file originale non è già .webp, elimina l'originale
  if (imgPath !== outPath) {
    unlinkSync(imgPath);
  } else {
    unlinkSync(imgPath); // sovrascrive il .webp originale
  }
  
  renameSync(outPath + '.tmp', outPath);

  const sizeAfter = statSync(outPath).size;
  totalAfter += sizeAfter;

  const saving = Math.round((1 - sizeAfter / sizeBefore) * 100);
  const beforeKb = Math.round(sizeBefore / 1024);
  const afterKb = Math.round(sizeAfter / 1024);
  const name = basename(outPath);
  console.log(`✅ ${name.padEnd(35)} ${String(beforeKb + 'KB').padStart(7)} → ${String(afterKb + 'KB').padStart(6)}  (-${saving}%)`);
}

const totalSavingPct = Math.round((1 - totalAfter / totalBefore) * 100);
console.log(`\n📦 Totale prima: ${Math.round(totalBefore / 1024)}KB`);
console.log(`📦 Totale dopo:  ${Math.round(totalAfter / 1024)}KB`);
console.log(`🚀 Risparmio totale: -${totalSavingPct}%\n`);
