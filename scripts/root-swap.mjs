// Na de Vite-build: de nieuwe statische homepage (public/nieuw) wordt de root,
// de React-app verhuist naar /app.html (routes verwijzen ernaar via vercel.json).
import { renameSync, copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
if (!existsSync(dist + 'index.html') || !existsSync(dist + 'nieuw/index.html')) {
  console.error('root-swap: verwachte bestanden ontbreken in dist/');
  process.exit(1);
}
renameSync(dist + 'index.html', dist + 'app.html');
copyFileSync(dist + 'nieuw/index.html', dist + 'index.html');
console.log('root-swap: nieuwe homepage op /, React-app op /app.html');
