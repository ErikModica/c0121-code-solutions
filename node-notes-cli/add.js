const noteBook = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'create') {
  noteBook.notes[noteBook.nextId] = process.argv[3];
  noteBook.nextId++;

  const noteBookJSON = JSON.stringify(noteBook, null, 2);

  fs.writeFile('./data.json', noteBookJSON, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });

}
