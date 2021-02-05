/* exported lastChars */

function lastChars(length, string) {
  var newString = '';

  for (var i = string.length - length; i < string.length; i++) {
    if (string[i] !== undefined) {
      newString += string[i];
    }
  }
  return newString;
}
