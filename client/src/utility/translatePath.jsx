const translatePath = (pathname, fromLang, toLang, routeMap, t) => {
  const segments = pathname.split('/').filter(Boolean);

  const slug = segments[1] || '';
  const dynamicId = decodeURIComponent(segments[2] || '');

  const matchedKey =
    Object.keys(routeMap[fromLang]).find(
      (key) => routeMap[fromLang][key] === slug
    ) || 'home';

  const newSlug = routeMap[toLang][matchedKey] || '';

  let translatedId = dynamicId;
  if (dynamicId) {
    const serviceIdMap = t('serviceIds', {
      lng: fromLang,
      returnObjects: true,
    });
    const serviceKey = Object.keys(serviceIdMap).find(
      (key) => serviceIdMap[key] === dynamicId
    );

    if (serviceKey) {
      translatedId = t(`serviceIds.${serviceKey}`, { lng: toLang });
    } else {
      const blogIdMap = t('blogs.blogCards.blogIds', {
        lng: fromLang,
        returnObjects: true,
      });

      const blogKey = Object.keys(blogIdMap).find(
        (key) => blogIdMap[key] === dynamicId
      );

      if (blogKey) {
        translatedId = t(`blogs.blogCards.blogIds.${blogKey}`, { lng: toLang });
      } else {
        console.warn('blogKey not found for dynamicId:', dynamicId);
      }
    }
  }

  let newPath = `/${toLang}`;
  if (newSlug) newPath += `/${newSlug}`;
  if (translatedId) newPath += `/${translatedId}`;

  return newPath;
};

export default translatePath;
