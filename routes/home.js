const router = require('express').Router();
const { getRandomImage } = require('../services/background');
const { getQuote } = require('../services/quotes');

router.get('/', getRandomImage, getQuote, (req, res) => {
  res.render('index', {
    image: res.image,
    quote: res.quote,
  });
});

module.exports = router;
