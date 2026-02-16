import { useEffect } from 'react';

const SeoMeta = ({
  title,
  description,
  url,
  alternates,
  canonical,
  image,
  jsonLd,
  type = 'website',
}) => {
  useEffect(() => {
    // izbriši sve SEO‑tagove koje je prethodna stranica ubacila
    const selectors = [
      'title',
      'meta[name="description"]',
      'meta[name="robots"]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'link[rel="canonical"]',
      'link[rel="alternate"]',
    ];

    selectors.forEach((sel) => {
      document.head.querySelectorAll(sel).forEach((el) => el.remove());
    });
  }, []); // prazan niz znači – jednom pri montaži

  return (
    <>
      <title>{title}</title>

      {canonical && <link rel='canonical' href={canonical} />}

      <meta name='description' content={description} />
      <meta name='robots' content='index, follow' />

      {/* Open Graph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}
      {image && <meta property='og:image:width' content='1200' />}
      {image && <meta property='og:image:height' content='630' />}
      {(canonical || url) && (
        <meta property='og:url' content={canonical || url} />
      )}
      <meta property='og:type' content={type} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}

      {/* hreflang */}
      {alternates?.map(({ href, lang }) => (
        <link key={lang} rel='alternate' href={href} hrefLang={lang} />
      ))}

      {jsonLd && (
        <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
};

export default SeoMeta;
