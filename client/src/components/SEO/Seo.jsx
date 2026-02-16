// import { Title, Meta, Link } from 'react-head';

const Seo = ({ title, description, image, url, canonical, jsonLd, type }) => {
  return (
    <>
      <Title>{title}</Title>
      {canonical && <Link rel='canonical' href={canonical} />}
      <Meta name='description' content={description} />
      <Meta name='robots' content='index, follow' />
      <Meta property='og:title' content={title} />
      <Meta property='og:description' content={description} />
      {image && <Meta property='og:image' content={image} />}
      {image && <Meta property='og:image:width' content='1200' />}
      {image && <Meta property='og:image:height' content='630' />}
      {(canonical || url) && (
        <Meta property='og:url' content={canonical || url} />
      )}
      <Meta property='og:type' content={type || 'website'} />
      <Meta name='twitter:card' content='summary_large_image' />
      <Meta name='twitter:title' content={title} />
      <Meta name='twitter:description' content={description} />
      {image && <Meta name='twitter:image' content={image} />}
      <AlternateLinks />
      {jsonLd && (
        <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
};

export default Seo;
