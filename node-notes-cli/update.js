const noteBook = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'update') {
  noteBook.notes[process.argv[3]] = process.argv[4];

  const noteBookJSON = JSON.stringify(noteBook, null, 2);

  fs.writeFile('./data.json', noteBookJSON, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
