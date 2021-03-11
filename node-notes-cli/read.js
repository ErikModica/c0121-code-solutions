const noteBook = require('./data.json');

if (process.argv[2] === 'read') {
  for (const key in noteBook.notes) {
    console.log(`${key}: ${noteBook.notes[key]}`);
  }
}
