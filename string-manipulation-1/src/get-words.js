/* exported getWords */

function getWords(string) {

  var stringArray = [];
  var newString = '';

  if (string !== '') {

    for (var i = 0; i < string.length; i++) {

      if (string[i] !== ' ') {
        newString += string[i];
      } else {
        stringArray.push(newString);
        newString = '';
      }
    }
    stringArray.push(newString);
  }
  return stringArray;
}

// there has to be an easier way to do this hahaaha
