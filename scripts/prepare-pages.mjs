import { existsSync, mkdirSync, renameSync } from 'node:fs';
import { join } from 'node:path';

const output = join(process.cwd(), 'dist', 'client');
const routes = ['contacts', 'events', 'gallery', 'halls', 'prices'];

for (const route of routes) {
  const source = join(output, `${route}.html`);
  const directory = join(output, route);
  const destination = join(directory, 'index.html');

  if (existsSync(source)) {
    mkdirSync(directory, { recursive: true });
    renameSync(source, destination);
  }
}

console.log('GitHub Pages directory routes prepared.');
