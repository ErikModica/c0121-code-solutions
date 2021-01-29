/* exported capitalize */

function capitalize(word) {

  var letter = '';

  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      letter += word[i].toUpperCase();
    } else {
      letter += word[i].toLowerCase();
    }
  }
  return letter;
}
