/* exported isVowel */

function isVowel(character) {

  var vowel = false;

  character = character.toUpperCase();

  // I could have done a bunch of nested if statements but I figured switch would
  // be better in this situation.  If you want me to redo it I can.

  switch (character) {
    case 'A':
      vowel = true;
      break;
    case 'E':
      vowel = true;
      break;
    case 'I':
      vowel = true;
      break;
    case 'O':
      vowel = true;
      break;
    case 'U':
      vowel = true;
  }

  return vowel;
}
