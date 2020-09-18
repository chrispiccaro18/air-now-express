const { createURI } = require('../../lib/utils/uri');

describe('uri tests', () => {
  it('creates a uri based on domain, path, and query', () => {
    const baseURL = 'http://www.airnowapi.org';

    const forecastZipCodePath = '/aq/forecast/zipCode';
    const query = {
      format: 'application/json',
      zipCode: '20002',
      date: '2020-09-18',
      distance: 25,
      API_KEY: 'secret'
    };
    const expected =
      'http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=20002&date=2020-09-18&distance=25&API_KEY=secret';
    const result = createURI(baseURL, forecastZipCodePath, query);
    expect(result).toBe(expected);
  });
});
