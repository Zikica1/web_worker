import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { blogs } from './client/src/data/db.js';

const distDir = path.resolve('client/dist');
const baseUrl = 'http://localhost:4173';

const staticRoutes = ['/', '/sr', '/en', '/sr/blogs', '/en/blogs'];

const blogRoutes = blogs.flatMap((blog) => [
  `/sr/blogs/${blog.slugs.sr}`,
  `/en/blogs/${blog.slugs.en}`,
]);

const routes = [...staticRoutes, ...blogRoutes];

async function prerender() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `${baseUrl}${route}`;
    console.log('Prerender:', url);

    await page.goto(url, { waitUntil: 'networkidle' });

    const html = await page.content();
    const filePath = path.join(
      distDir,
      route === '/' ? 'index.html' : `${route}/index.html`
    );

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
  }

  await browser.close();
}

prerender();
