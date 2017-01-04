const router = require('express').Router();
const { getRandomImage } = require('../services/background');
const { getQuote } = require('../services/quotes');
const { findWeatherByCity } = require('../services/weather');
const icons = require('../weather-icons')

router.get('/', getRandomImage, getQuote, findWeatherByCity, (req, res) => {
  const icon = icons[res.weather.weather[0].main.toLowerCase()];
  res.render('index', {
    image: res.image,
    quote: res.quote,
    weather: res.weather,
    icon,
  });
});

module.exports = router;
