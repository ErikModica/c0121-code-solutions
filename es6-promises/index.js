const takeAChance = require('./take-a-chance');

const chanceTaken = takeAChance('Erik');
chanceTaken.then(value => {
  console.log(value);
});
chanceTaken.catch(error => {
  console.log(error.message);
});
