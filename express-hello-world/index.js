const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Konnichiwa, Sekai!');
});

app.listen(3000, () => {
});
