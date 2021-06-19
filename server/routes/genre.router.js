const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  let id = [req.params.id];
  console.log('req.params.id:', id);
  const query = `SELECT "genres".name FROM "genres"
   JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
   JOIN "movies" on "movies".id = "movies_genres".movie_id
   WHERE "movies".id = $1;`

   pool.query(query, id)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows)
    }).catch(err =>{
      console.log('Error in Genre GET', err);
      res.sendStatus(500);
    });
});

module.exports = router;