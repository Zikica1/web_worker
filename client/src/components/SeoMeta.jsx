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
