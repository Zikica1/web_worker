import {
  MdSpeed,
  MdOutlineDesktopWindows,
  MdPhoneIphone,
} from 'react-icons/md';
import { MdStorage } from 'react-icons/md';
import { CiMobile1, CiMail, CiAlarmOn } from 'react-icons/ci';

export const hero = [
  {
    id: 0,
    imgMob:
      '/assets/pictures/home/hero/izrada-web-sajta-poslovna-zena-na-laptopu-325px.webp',
    imgMob2:
      '/assets/pictures/home/hero/izrada-web-sajta-poslovna-zena-na-laptopu-325px@2x.webp',
    imgTab:
      '/assets/pictures/home/hero/izrada-web-sajta-poslovna-zena-na-laptopu-586px.webp',
    imgDes:
      '/assets/pictures/home/hero/izrada-web-sajta-poslovna-zena-na-laptopu-822px.webp',
  },
  {
    id: 1,
    imgMob:
      '/assets/pictures/home/hero/izrada-web-sajta-strucni-tim-planiranje-325px.webp',
    imgMob2:
      '/assets/pictures/home/hero/izrada-web-sajta-strucni-tim-planiranje-325px@2x.webp',
    imgTab:
      '/assets/pictures/home/hero/izrada-web-sajta-strucni-tim-planiranje-586px.webp',
    imgDes:
      '/assets/pictures/home/hero/izrada-web-sajta-strucni-tim-planiranje-822px.webp',
  },
  {
    id: 2,
    imgMob:
      '/assets/pictures/home/hero/izrada-web-sajta-fokusirani-developer-325px.webp',
    imgMob2:
      '/assets/pictures/home/hero/izrada-web-sajta-fokusirani-developer-325px@2x.webp',
    imgTab:
      '/assets/pictures/home/hero/izrada-web-sajta-fokusirani-developer-586px.webp',
    imgDes:
      '/assets/pictures/home/hero/izrada-web-sajta-fokusirani-developer-822px.webp',
  },
];

export const services = [
  {
    id: 0,
    category: 'website',
    slugs: {
      en: 'website-development',
      sr: 'izrada-web-sajta',
    },
    Icon: MdOutlineDesktopWindows,
    imgMob: '/assets/pictures/serviceCardDet/serviceCardWeb-img-480px.webp',
    imgMob2: '/assets/pictures/serviceCardDet/serviceCardWeb-img-480px@2x.webp',
    imgTab: '/assets/pictures/serviceCardDet/serviceCardWeb-img-1024px.webp',
    imgDes: '/assets/pictures/serviceCardDet/serviceCardWeb-img-1536px.webp',
  },
  {
    id: 1,
    category: 'seo',
    slugs: {
      en: 'seo-optimization',
      sr: 'seo-optimizacija',
    },
    Icon: MdSpeed,
    imgMob: '/assets/pictures/serviceCardDet/serviceCardSeo-img-480px.webp',
    imgMob2: '/assets/pictures/serviceCardDet/serviceCardSeo-img-480px@2x.webp',
    imgTab: '/assets/pictures/serviceCardDet/serviceCardSeo-img-1024px.webp',
    imgDes: '/assets/pictures/serviceCardDet/serviceCardSeo-img-1536px.webp',
  },
  {
    id: 2,
    category: 'design',
    slugs: {
      en: 'design',
      sr: 'dizajin',
    },
    Icon: MdPhoneIphone,
    imgMob: '/assets/pictures/serviceCardDet/serviceCardRes-img-480px.webp',
    imgMob2: '/assets/pictures/serviceCardDet/serviceCardRes-img-480px@2x.webp',
    imgTab: '/assets/pictures/serviceCardDet/serviceCardRes-img-1024px.webp',
    imgDes: '/assets/pictures/serviceCardDet/serviceCardRes-img-1536px.webp',
  },
  {
    id: 3,
    category: 'hosting',
    slugs: {
      en: 'hosting',
      sr: 'hosting',
    },
    Icon: MdStorage,
    imgMob: '/assets/pictures/serviceCardDet/serviceCardHost-img-480px.webp',
    imgMob2:
      '/assets/pictures/serviceCardDet/serviceCardHost-img-480px@2x.webp',
    imgTab: '/assets/pictures/serviceCardDet/serviceCardHost-img-1024px.webp',
    imgDes: '/assets/pictures/serviceCardDet/serviceCardHost-img-1536px.webp',
  },
];

export const portfolio = [
  {
    id: '1',
    url: 'https://construction-group.netlify.app/',
    imgMob:
      '/assets/pictures/portfolio/kompanija-za-gradjevinske-radove-pocetna-stranica-450x2818.webp',
    imgMob2:
      '/assets/pictures/portfolio/kompanija-za-gradjevinske-radove-pocetna-stranica-900x5637.webp',
    imgDes:
      '/assets/pictures/portfolio/kompanija-za-gradjevinske-radove-pocetna-stranica-768x4810.webp',
    height: '4695',
  },
  {
    id: '2',
    url: 'https://travelagencyyy.netlify.app/',
    imgMob:
      '/assets/pictures/portfolio/agencija-za-putovanje-pocetna-stranica-450x1497.webp',
    imgMob2:
      '/assets/pictures/portfolio/agencija-za-putovanje-pocetna-stranica-900x2995.webp',
    imgDes:
      '/assets/pictures/portfolio/agencija-za-putovanje-pocetna-stranica-768x2555.webp',
    height: '2555',
  },
  {
    id: '3',
    url: 'https://word-press.netlify.app/',
    imgMob:
      '/assets/pictures/portfolio/agencija-za-veb-dizajin-pocetna-stranica-450x2751.webp',
    imgMob2:
      '/assets/pictures/portfolio/agencija-za-veb-dizajin-pocetna-stranica-900x5502.webp',
    imgDes:
      '/assets/pictures/portfolio/agencija-za-veb-dizajin-pocetna-stranica-768x4695.webp',
    height: '4695',
  },
  {
    id: '4',
    url: 'https://shop-confectionery.netlify.app/',
    imgMob:
      '/assets/pictures/portfolio/prodavnica-za-slatkise-pocetna-stranica-450x2262.webp',
    imgMob2:
      '/assets/pictures/portfolio/prodavnica-za-slatkise-pocetna-stranica-900x4523.webp',
    imgDes:
      '/assets/pictures/portfolio/prodavnica-za-slatkise-pocetna-stranica-768x3860.webp',
    height: '3860',
  },
  {
    id: '5',
    url: 'https://consalting-agency.netlify.app/',
    imgMob:
      '/assets/pictures/portfolio/agencija-za-savetovanje-pocetna-stranica-450x2607.webp',
    imgMob2:
      '/assets/pictures/portfolio/agencija-za-savetovanje-pocetna-stranica-900x5214.webp',
    imgDes:
      '/assets/pictures/portfolio/agencija-za-savetovanje-pocetna-stranica-768x4449.webp',
    height: '4449',
  },
];

export const contact = [
  {
    id: '1',
    Icon: CiMobile1,
  },
  {
    id: '2',
    Icon: CiMail,
  },
  {
    id: '3',
    Icon: CiAlarmOn,
  },
];

export const about = [
  {
    id: '0',
    img: '/assets/pictures/about/icon-palete.svg',
  },
  {
    id: '1',
    img: '/assets/pictures/about/icon-gear.svg',
  },
  {
    id: '2',
    img: '/assets/pictures/about/icon-rocket.svg',
  },
];

export const skills = [
  {
    id: '0',
    language: 'React',
    utilization: 95,
  },
  {
    id: '1',
    language: 'JavaScript',
    utilization: 85,
  },
  {
    id: '2',
    language: 'Html',
    utilization: 50,
  },
  {
    id: '3',
    language: 'Css',
    utilization: 85,
  },
  {
    id: '4',
    language: 'Node',
    utilization: 75,
  },
];

export const blogs = [
  {
    id: 0,
    key: 'dev errors',
    slugs: {
      en: 'website-development-errors',
      sr: 'greške-u-razvoju-web-sajtova',
    },
    imgCard: '/assets/pictures/blogs/greška-u-web-razvoju-636px.webp',
    imgMob: '/assets/pictures/blogs/greška-u-web-razvoju-450px.webp',
    imgMob2: '/assets/pictures/blogs/greška-u-web-razvoju-450px@2x.webp',
    imgTab: '/assets/pictures/blogs/greška-u-web-razvoju-768px.webp',
    imgDes: '/assets/pictures/blogs/greška-u-web-razvoju-1366px.webp',
    imgDesLar: '/assets/pictures/blogs/greška-u-web-razvoju-1536px.webp',
  },
  {
    id: 1,
    key: 'small business website',
    slugs: {
      en: 'small-business-website-guide',
      sr: 'vodič-web-sajt-za-mali-biznis',
    },
    imgCard:
      '/assets/pictures/blogs/izrada-web-sajta-za-mali-biznis-636px.webp',
    imgMob: '/assets/pictures/blogs/izrada-web-sajta-za-mali-biznis-450px.webp',
    imgMob2:
      '/assets/pictures/blogs/izrada-web-sajta-za-mali-biznis-450px@2x.webp',
    imgTab: '/assets/pictures/blogs/izrada-web-sajta-za-mali-biznis-768px.webp',
    imgDes:
      '/assets/pictures/blogs/izrada-web-sajta-za-mali-biznis-1366px.webp',
    imgDesLar:
      '/assets/pictures/blogs/izrada-web-sajta-za-mali-biznis-1536px.webp',
  },
  {
    id: 2,
    key: 'key elements for the site',
    slugs: {
      en: 'elements-of-a-modern-website',
      sr: 'elementi-modernog-web-sajta',
    },
    imgCard:
      '/assets/pictures/blogs/izrada-web-sajta-ključni-elementi-636px.webp',
    imgMob:
      '/assets/pictures/blogs/izrada-web-sajta-ključni-elementi-450px.webp',
    imgMob2:
      '/assets/pictures/blogs/izrada-web-sajta-ključni-elementi-450px@2x.webp',
    imgTab:
      '/assets/pictures/blogs/izrada-web-sajta-ključni-elementi-768px.webp',
    imgDes:
      '/assets/pictures/blogs/izrada-web-sajta-ključni-elementi-1366px.webp',
    imgDesLar:
      '/assets/pictures/blogs/izrada-web-sajta-ključni-elementi-1536px.webp',
  },
  {
    id: 3,
    slugs: {
      en: 'why-you-need-a-website',
      sr: 'zašto-vam-je-potreban-web-sajt',
    },
    key: 'reasons for the website',
    imgCard:
      '/assets/pictures/blogs/izrada-web-sajta-zašto-je-potrebna-636px.webp',
    imgMob:
      '/assets/pictures/blogs/izrada-web-sajta-zašto-je-potrebna-450px.webp',
    imgMob2:
      '/assets/pictures/blogs/izrada-web-sajta-zašto-je-potrebna-450px@2x.webp',
    imgTab:
      '/assets/pictures/blogs/izrada-web-sajta-zašto-je-potrebna-768px.webp',
    imgDes:
      '/assets/pictures/blogs/izrada-web-sajta-zašto-je-potrebna-1366px.webp',
    imgDesLar:
      '/assets/pictures/blogs/izrada-web-sajta-zašto-je-potrebna-1536px.webp',
  },
];
