import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import http from 'http';
import serveStatic from 'serve-static';
import finalhandler from 'finalhandler';
import { routes } from './prerender.routes.js';

/* =========================
   PATHS & CONSTANTS
========================= */

const distDir = path.resolve('client/dist');
const seoDataPath = path.resolve('client/src/seo/seoData.json');
const PORT = 4173;

const seoData = JSON.parse(fs.readFileSync(seoDataPath, 'utf8'));

/* =========================
   ROUTE → SELECTOR MAP
========================= */

const routeSelectors = {
  '/': '.home',
  '/sr/': '.home',
  '/en/': '.home',

  '/sr/usluge/': '.services',
  '/en/services/': '.services',

  '/sr/o-nama/': '.about',
  '/en/about/': '.about',

  '/sr/blogs/': 'main',
  '/en/blogs/': 'main',
};

/* =========================
   ROUTE → TITLE RESOLVER
========================= */

function getExpectedTitle(route) {
  const lang = route.startsWith('/en') ? 'en' : 'sr';

  // HOME
  if (route === '/' || route === '/sr/' || route === '/en/') {
    return seoData.home?.[lang]?.title || null;
  }

  // ABOUT
  if (route.includes('/o-nama') || route.includes('/about')) {
    return seoData.about?.[lang]?.title || null;
  }

  // SERVICES (listing)
  if (route === '/sr/usluge/' || route === '/en/services/') {
    return seoData.services?.[lang]?.title || null;
  }

  // SERVICE DETAILS
  if (route.includes('/usluge/') || route.includes('/services/')) {
    const slug = route.split('/').filter(Boolean).pop();
    return seoData.servicesDetails?.[slug]?.[lang]?.title || null;
  }

  // BLOG DETAILS
  if (route.includes('/blogs/')) {
    const slug = route.split('/').filter(Boolean).pop();
    return seoData.blogs?.[slug]?.[lang]?.title || null;
  }

  return null;
}

/* =========================
   STATIC SERVER (SPA FALLBACK)
========================= */

const serve = serveStatic(distDir, {
  index: ['index.html'],
  fallthrough: false,
});

const server = http.createServer((req, res) => {
  serve(req, res, (err) => {
    if (err) {
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

/* =========================
   PRERENDER PROCESS
========================= */

server.listen(PORT, async () => {
  console.log(`🟢 Server running at http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });

  const maxParallelPages = 4;
  const queue = [...routes];

  async function processRoute(page) {
    while (queue.length > 0) {
      const route = queue.shift();
      const url = `http://localhost:${PORT}${route}`;
      const selector = routeSelectors[route] || 'main';
      const expectedTitle = getExpectedTitle(route);

      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForSelector(selector, { timeout: 30000 });

        if (expectedTitle) {
          await page.waitForFunction(
            (title) => document.title === title,
            { timeout: 15000 },
            expectedTitle
          );
        }

        await page.waitForTimeout(200);

        const html = await page.content();

        const normalizedRoute =
          route === '/' ? '' : route.replace(/^\/|\/$/g, '');

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
    Array.from({ length: maxParallelPages }, () => browser.newPage())
  );

  await Promise.all(pages.map((page) => processRoute(page)));

  await browser.close();
  server.close(() => console.log('✅ Prerender finished'));
});
