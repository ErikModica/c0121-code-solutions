/* exported numVowels */

function numVowels(string) {
  var vowelCount = 0;

  string = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelCount++;
    }
  }
  return vowelCount;
}
