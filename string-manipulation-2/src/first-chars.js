/* exported firstChars */

function firstChars(length, string) {
  var newString = '';

  if (string.length < length) {
    length = string.length;
  }

  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString;
}
