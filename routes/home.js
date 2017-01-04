const router = require('express').Router();
const { getRandomImage } = require('../services/background');
const { getQuote } = require('../services/quotes');
const { findWeatherByCity } = require('../services/weather');

router.get('/', getRandomImage, getQuote, findWeatherByCity, (req, res) => {
  res.render('index', {
    image: res.image,
    quote: res.quote,
    weather: res.weather,
  });
});

module.exports = router;
