/* exported capitalizeWords */

function capitalizeWords(string) {
  var capitalString = '';
  var capitalNeed = true;

  string = string.toLowerCase();
  // console.log(string);

  for (var i = 0; i < string.length; i++) {

    if (!capitalNeed) {
      capitalString += string[i];
    } else {
      capitalString += string[i].toUpperCase();
      capitalNeed = false;
    }

    if (string[i] === ' ') {
      capitalNeed = true;
    }

  }
  return capitalString;
}
