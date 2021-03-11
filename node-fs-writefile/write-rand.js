const fs = require('fs');

const data = (Math.floor(Math.random() * Math.floor(100))).toString();

fs.writeFile('./random-txt', data, 'utf8', err => {
  if (err) {
    process.exit(1);
  }
});
