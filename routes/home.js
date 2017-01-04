const router = require('express').Router();
const { getRandomImage } = require('../services/background');

router.get('/', getRandomImage, (req, res) => {
  res.render('index', {
    image: res.image,
  });
});

module.exports = router;
