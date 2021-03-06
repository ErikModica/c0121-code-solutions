/* exported truncate */

function truncate(length, string) {

  var truncatedString = '';

  if (string === '') {
    truncatedString += '...';
    return truncatedString;
  }

  for (var i = 0; i < length; i++) {
    if (string[i] !== undefined) {
      truncatedString += string[i];
    }
  }

  truncatedString += '...';
  return truncatedString;
}
