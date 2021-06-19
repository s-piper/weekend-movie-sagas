const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log('req.params.id:', id);
  
  res.sendStatus(500)
});

module.exports = router;