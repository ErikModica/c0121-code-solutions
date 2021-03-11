const fs = require('fs');

const fileToCopy = process.argv[2];
const fileToPasteIn = process.argv[3];
fs.readFile(`./${fileToCopy}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    fs.writeFile(`./${fileToPasteIn}`, data, 'utf8', err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
});
