/* exported isPalindromic */

function isPalindromic(string) {

  var reverseString = '';
  var noSpaceString = string.replaceAll(' ', '');
  var isPalandrome;

  for (var i = noSpaceString.length - 1; i >= 0; i--) {
    reverseString += noSpaceString[i];
  }

  if (reverseString === noSpaceString) {
    isPalandrome = true;
  } else {
    isPalandrome = false;
  }
  return isPalandrome;
}
