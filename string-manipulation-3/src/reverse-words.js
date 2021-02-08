/* exported reverseWords */

function reverseWords(string) {

  var newString = '';
  var singleWord = '';
  var reverseWord = '';
  var i = 0;

  while (i < string.length) {

    while (string[i] !== ' ' && i < string.length) {
      singleWord += string[i];
      i++;
    }

    for (var reverseIndex = singleWord.length - 1; reverseIndex >= 0; reverseIndex--) {
      reverseWord += singleWord[reverseIndex];
    }

    newString += ' ' + reverseWord;
    singleWord = '';
    reverseWord = '';
    i++;

  }
  newString = newString.trim();
  return newString;
}
