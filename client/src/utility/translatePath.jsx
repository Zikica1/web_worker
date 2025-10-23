const translatePath = (pathname, fromLang, toLang, routeMap, t) => {
  const segments = pathname.split('/').filter(Boolean);

  const slug = segments[1] || '';
  const dynamicId = segments[2] || '';

  const matchedKey =
    Object.keys(routeMap[fromLang]).find(
      (key) => routeMap[fromLang][key] === slug
    ) || 'home';

  const newSlug = routeMap[toLang][matchedKey] || '';

  let translatedId = dynamicId;
  if (dynamicId) {
    const idMap = t('serviceIds', { lng: fromLang, returnObjects: true });
    const reverseKey = Object.keys(idMap).find(
      (key) => idMap[key] === dynamicId
    );

    if (reverseKey) {
      translatedId = t(`serviceIds.${reverseKey}`, { lng: toLang });
    }
  }

  let newPath = `/${toLang}`;
  if (newSlug) newPath += `/${newSlug}`;
  if (translatedId) newPath += `/${translatedId}`;

  return newPath;
};

export default translatePath;
