export const breadcrumbMap = {
  sr: {
    'izrada-web-sajta': [
      { name: 'Početna', url: '/sr/' },
      { name: 'Usluge', url: '/sr/usluge/' },
      { name: 'Izrada web sajta', url: '/sr/usluge/izrada-web-sajta/' },
    ],
    'seo-optimizacija': [
      { name: 'Početna', url: '/sr/' },
      { name: 'Usluge', url: '/sr/usluge/' },
      { name: 'SEO optimizacija', url: '/sr/usluge/seo-optimizacija/' },
    ],
    //znači isto dizajin === 'dizajin', u u objektima svi ključevi su string
    dizajin: [
      { name: 'Početna', url: '/sr/' },
      { name: 'Usluge', url: '/sr/usluge/' },
      { name: 'Dizajin', url: '/sr/usluge/dizajin/' },
    ],
    hosting: [
      { name: 'Početna', url: '/sr/' },
      { name: 'Usluge', url: '/sr/usluge/' },
      { name: 'Hosting', url: '/sr/usluge/hosting/' },
    ],
  },
  en: {
    'website-development': [
      { name: 'Home', url: '/en/' },
      { name: 'Services', url: '/en/services/' },
      { name: 'Website development', url: '/en/services/website-development/' },
    ],
    'seo-optimization': [
      { name: 'Home', url: '/en/' },
      { name: 'Services', url: '/en/services' },
      { name: 'SEO optimization', url: '/en/services/seo-optimization' },
    ],
    design: [
      { name: 'Home', url: '/en/' },
      { name: 'Services', url: '/en/services' },
      { name: 'Design', url: '/en/services/design/' },
    ],
    hosting: [
      { name: 'Home', url: '/en/' },
      { name: 'Services', url: '/en/services/' },
      { name: 'Hosting', url: '/en/services/hosting/' },
    ],
  },
};
