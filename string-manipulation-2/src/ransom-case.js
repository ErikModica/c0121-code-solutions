/* exported ransomCase */

function ransomCase(string) {

  var returnString = '';

  for (var i = 0; i < string.length; i++) {
    if (i !== 0) {
      if (i % 2 > 0) {
        returnString += string[i].toUpperCase();
      } else {
        returnString += string[i].toLowerCase();
      }
    } else {
      returnString += string[i].toLowerCase();
    }
  }
  return returnString;
}
