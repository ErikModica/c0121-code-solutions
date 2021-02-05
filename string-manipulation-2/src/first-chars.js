/* exported firstChars */

function firstChars(length, string) {
  var newString = '';

  for (var i = 0; i < length; i++) {
    if (string[i] !== undefined) {
      newString += string[i];
    }
  }
  return newString;
}
