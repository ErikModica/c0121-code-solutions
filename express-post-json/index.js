const express = require('express');
const app = express();

let nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.status(200).json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextID] = req.body;
  grades[nextID].id = nextID;
  grades[nextID].score = parseInt(grades[nextID].score, 10);
  res.status(201).send(grades[nextID]);
  nextID++;
});

app.listen(3000, () => {
});
