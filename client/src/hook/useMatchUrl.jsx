import { useMatch } from 'react-router-dom';

const useMatchUrl = (urlSr = '/sr', urlEn = '/en') => {
  const matchSr = useMatch(urlSr);
  const matchEn = useMatch(urlEn);

  const isMatch = Boolean(matchSr || matchEn);

  return isMatch;
};

export default useMatchUrl;
