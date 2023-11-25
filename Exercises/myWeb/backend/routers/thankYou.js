const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/thankYou.html'));
});

router.post('/', (req, res, next) => {
    const { massage } = req.body; 
    console.log(`Received form submission - Massage: ${massage}`);
  
    res.send('Thank you !');
  });

module.exports = router;
