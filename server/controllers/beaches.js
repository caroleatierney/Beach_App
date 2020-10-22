const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

// ==================================================
// ===================== GET ========================
// ==================================================
router.get('/', (req , res) => {
  postgres.query(`SELECT * FROM beaches ORDER BY id ASC;`, (err, results) => {
    res.json(results.rows)
  });
});

// ==================================================
// ===================== POST =======================
// ==================================================
router.post('/', (req , res) => {
  postgres.query
  (
  `INSERT INTO beaches (name, photo, photo_credit, access, parking, hours, avail_rec, notes)
    VALUES
    (
    '${req.body.name}',
    '${req.body.photo}',
    '${req.body.photo_credit}',
    '${req.body.access}',
    '${req.body.parking}',
    '${req.body.hours}',
    '${req.body.avail_rec}',
    '${req.body.notes}'
    )
  `,
    (err, results) => {
    postgres.query(`SELECT * FROM beaches ORDER BY id ASC;`, (err, results) => {
      res.json(results.rows)
    });
  })
});

// ==================================================
// ================== DELETE ========================
// ==================================================
router.delete('/id', (req , res) => {
  postgres.query(`DELETE FROM beaches WHERE id = ${req.params.id};`, (err, results) => {
    postgres.query(`SELECT * FROM beaches ORDER BY id ASC;`, (err, results) => {
      res.json(results.rows)
    });
  });
});

// ==================================================
// ===================== PUT ========================
// ==================================================
router.put('/:id', (req, res) => {
  postgres.query(`UPDATE beaches WHERE id = ${req.params.id};`, (err, results) => {
    postgres.query('SELECT * FROM people ORDER BY id ASC;', (err, results) => {
      res.json(results.rows)
    });
  });
});

module.exports = router;
