const fs = require('fs');

const data = process.argv[2];

if (typeof data !== 'string') {
  data.toString();
}

fs.writeFile('./note.txt', data, 'utf8', err => {
  if (err) {
    process.exit(1);
  }
});
