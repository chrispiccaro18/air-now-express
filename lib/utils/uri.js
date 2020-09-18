const createURI = (domain, pathOption, query) => {
  const queryString = Object.entries(query).reduce((queryString, entry) => {
    const [key, value] = entry;
    const ampersand = queryString ? '&' : '';
    return `${queryString}${ampersand}${key}=${value}`;
  }, '');

  console.log(encodeURI(`${domain}${pathOption}/?${queryString}`));
  return encodeURI(`${domain}${pathOption}/?${queryString}`);
};

module.exports = {
  createURI
};
