const { query } = require('express');
const request = require('superagent');
const { createURI } = require('../utils/uri');

require('dotenv').config();
const baseURL = 'http://www.airnowapi.org';

const forecastZipCodePath = '/aq/forecast/zipCode';
const historicalZipCodePath = '/aq/observation/zipCode/historical';

const getForecastZipCode = async query =>
  await request.get(createURI(baseURL, forecastZipCodePath, query));

const getHistoricalZipCode = async query =>
  await request.get(createURI(baseURL, historicalZipCodePath, query));

module.exports = {
  getForecastZipCode,
  getHistoricalZipCode
};
