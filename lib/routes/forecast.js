require('dotenv').config();
const { Router } = require('express');
const { getForecastZipCode } = require('../services/air-now-api');

const defaultQuery = {
  format: 'application/json',
  zipCode: '20002',
  date: '2020-09-18',
  // distance: 25,
  API_KEY: process.env.AIR_NOW_KEY
};

module.exports = Router().get('/zipcode', async (req, res, next) => {
  const query = req.query;
  try {
    const response = await getForecastZipCode({ ...defaultQuery, ...query });
    console.log(response);
    res.send(response.body);
  } catch (e) {
    next(e);
  }
});
