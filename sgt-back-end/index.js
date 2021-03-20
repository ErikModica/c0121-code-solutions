const express = require('express');
// const fs = require('fs');
const pg = require('pg');

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
  select *
  from "grades"
  order by "gradeId"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res, next) => {

  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score, 10);

  if (name === undefined || course === undefined || score === undefined) {
    res.status(400).json({ error: 'Must fill out all input fields(name, course, score)' });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Must enter a valid score(intiger between 0 and 100)' });
  } else {
    const sql = `
                insert into "grades" ("name", "course", "score")
                values ($1, $2, $3)
                returning *
                `;

    const values = [name, course, score];

    db.query(sql, values)
      .then(result => {
        const grade = result.rows;
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });

  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {

  const gradeId = parseInt(req.params.gradeId, 10);
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'Must enter a valid ID(intiger greater than 0)' });
  } else if (name === undefined || course === undefined || score === undefined) {
    res.status(400).json({ error: 'Must fill out all input fields(name, course, score)' });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Must enter a valid score(intiger between 0 and 100)' });
  } else {
    const sql = `
                update "grades"
                set "name" = $1,
                    "course" = $2,
                    "score" = $3
                where "gradeId" = $4
                returning *
                `;
    const values = [name, course, score, gradeId];

    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade at ID number ${gradeId}` });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {

  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'Must enter a valid ID(intiger greater than 0)' });
  } else {

    const sql = `
                delete from "grades"
                where "gradeId" = $1
                returning *
                `;

    const values = [gradeId];

    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade at ID number ${gradeId}` });
        } else {
          res.status(204).send();
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
});
