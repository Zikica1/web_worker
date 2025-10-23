import { Title, Meta } from 'react-head';
import AlternateLinks from './AlternateLinks';

const Seo = ({ title, description, image, url, jsonLd }) => {
  return (
    <>
      <Title>{title}</Title>
      <Meta name='description' content={description} />
      <Meta name='robots' content='index, follow' />
      <Meta property='og:title' content={title} />
      <Meta property='og:description' content={description} />
      {image && <Meta property='og:image' content={image} />}
      {url && <Meta property='og:url' content={url} />}
      <Meta property='og:type' content='website' />
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
