import { cpSync, existsSync, mkdirSync, renameSync, rmSync } from 'node:fs';
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

// Vinext writes bundled assets inside a directory named after assetPrefix.
// GitHub Pages already serves the uploaded artifact below that prefix, so the
// extra directory would turn /repo/_next/... into /repo/repo/_next/....
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];

if (repositoryName) {
  const prefixedDirectory = join(output, repositoryName);
  const prefixedAssets = join(prefixedDirectory, '_next');
  const publicAssets = join(output, '_next');

  if (existsSync(prefixedAssets)) {
    cpSync(prefixedAssets, publicAssets, { recursive: true });
    rmSync(prefixedDirectory, { recursive: true, force: true });
  }
}

console.log('GitHub Pages directory routes prepared.');
