/* exported capitalizeWord */

function capitalizeWord(word) {

  var capitalWord = '';

  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalWord += word[i].toUpperCase();
    } else {
      capitalWord += word[i].toLowerCase();
    }
  }
  if (capitalWord === 'Javascript') {
    capitalWord = 'JavaScript';
  }

  return capitalWord;
}
