import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import http from 'http';
import serveStatic from 'serve-static';
import finalhandler from 'finalhandler';
import { routes } from './prerender.routes.js';

const distDir = path.resolve('client/dist');
const PORT = 4173;

// Mapiranje ruta na glavni element koji garantuje da je sadržaj renderovan
const routeSelectors = {
  // Home
  '/': '.home',
  '/sr': '.home',
  '/en': '.home',

  // Blog
  '/sr/blogs/mobilni-web-dizajn': 'article.blogCardDet',
  '/en/blogs/mobile-web-design': 'article.blogCardDet',
  '/sr/blogs/uticaj-websajta-na-imidz-brenda': 'article.blogCardDet',
  '/en/blogs/influence-of-website-on-brand-image': 'article.blogCardDet',
  '/sr/blogs/greške-u-razvoju-web-sajtova': 'article.blogCardDet',
  '/en/blogs/website-development-errors': 'article.blogCardDet',
  '/sr/blogs/vodič-web-sajt-za-mali-biznis': 'article.blogCardDet',
  '/en/blogs/small-business-website-guide': 'article.blogCardDet',
  '/sr/blogs/elementi-modernog-web-sajta': 'article.blogCardDet',
  '/en/blogs/elements-of-a-modern-website': 'article.blogCardDet',
  '/sr/blogs/zašto-vam-je-potreban-web-sajt': 'article.blogCardDet',
  '/en/blogs/why-you-need-a-website': 'article.blogCardDet',

  //About
  '/sr/o-nama': '.aboutUs',
  '/en/about': '.aboutUs',

  // Services
  '/sr/usluge': '.services',
  '/en/services': '.services',
  '/sr/usluge/izrada-web-sajta': 'article.serCardDet',
  '/en/services/website-development': 'article.serCardDet',
  '/sr/usluge/seo-optimizacija': 'article.serCardDet',
  '/en/services/seo-optimization': 'article.serCardDet',
  '/sr/usluge/dizajin': 'article.serCardDet',
  '/en/services/design': 'article.serCardDet',
};

// SPA server sa fallback na index.html
const serve = serveStatic(distDir, {
  index: ['index.html'],
  fallthrough: false,
});

const server = http.createServer((req, res) => {
  serve(req, res, (err) => {
    if (err) {
      // fallback za SPA: sve rute vraćaju index.html
      fs.readFile(path.join(distDir, 'index.html'), (readErr, data) => {
        if (readErr) {
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }
      });
    }
  });
});

server.listen(PORT, async () => {
  console.log(`🟢 Server running at http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });

  const maxParallelPages = 4; // broj paralelnih tabova
  const queue = [...routes];

  async function processRoute(page) {
    while (queue.length > 0) {
      const route = queue.shift();
      const url = `http://localhost:${PORT}${route}`;
      const selector = routeSelectors[route] || 'main';

      try {
        // čekamo da svi network zahtevi završe (lazy-load, API)
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForSelector(selector, { timeout: 30000 });
        await page.waitForTimeout(200); // extra delay za animacije

        const html = await page.content();
        const normalizedRoute = route === '/' ? '' : route.replace(/^\//, '');
        const outputDir = path.join(distDir, normalizedRoute);
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');

        console.log(`✔ prerendered ${route}`);
      } catch (e) {
        console.error(`❌ Error prerendering ${route}:`, e.message);
      }
    }
  }

  const pages = await Promise.all(
    Array.from({ length: maxParallelPages }, () => browser.newPage()),
  );
  await Promise.all(pages.map((page) => processRoute(page)));

  await browser.close();
  server.close(() => console.log('✅ Server closed, prerender finished'));
});
