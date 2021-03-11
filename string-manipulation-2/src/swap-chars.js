/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {

  var newString = '';
  var firstChar = '';
  var secondChar = '';

  firstChar = string[firstIndex];
  secondChar = string[secondIndex];

  for (var i = 0; i < string.length; i++) {

    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {
      newString += firstChar;
    } else {
      newString += string[i];
    }

  }
  return newString;
}
