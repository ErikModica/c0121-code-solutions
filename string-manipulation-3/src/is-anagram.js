/* exported isAnagram */

function isAnagram(firstString, secondString) {

  var firstNoSpaceString = firstString.replaceAll(' ', '');
  var secondNoSpaceString = secondString.replaceAll(' ', '');
  var anagramBool = false;
  var whileIndex = 0;

  if (firstNoSpaceString.length !== secondNoSpaceString.length) {
    return anagramBool;
  }

  for (var i = 0; i < secondNoSpaceString.length; i++) {

    while (firstNoSpaceString[whileIndex] !== secondNoSpaceString[i] && whileIndex < firstNoSpaceString.length) {
      whileIndex++;
    }

    if (firstNoSpaceString.length === whileIndex) {
      anagramBool = false;
      return anagramBool;
    } else {
      anagramBool = true;
      whileIndex = 0;
    }
  }

  return anagramBool;
}
