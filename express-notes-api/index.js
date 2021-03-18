const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();
let dataJSON = '';

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(parseInt(req.params.id, 10))) {
    res.status(400).json({ error: 'ID must be a positive integer' });
  } else if (data.notes[req.params.id] !== undefined) {
    res.json(data.notes[req.params.id]);
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }

});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined) {
    const note = req.body;
    note.id = data.nextId;
    data.notes[data.nextId] = note;
    data.nextId++;
    dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' });
        console.error(err);
      } else {
        res.status(201).json(req.body);
      }
    });
  }

});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(parseInt(req.params.id, 10))) {
    res.status(400).json({ error: 'ID must be a positive integer' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else if (data.notes[req.params.id] !== undefined) {
    delete data.notes[req.params.id];
    dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' });
        console.error(err);
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(parseInt(req.params.id, 10))) {
    res.status(400).json({ error: 'ID must be a positive integer' });
  } else if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined && req.params.id !== undefined && data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else if (req.body.content !== undefined && req.params.id !== undefined) {
    data.notes[req.params.id].content = req.body.content;
    dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' });
        console.error(err);
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
});
