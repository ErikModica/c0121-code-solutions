/* exported titleCase */

function titleCase(title) {

  var i = 0;
  var singleWord = '';
  var fullString = '';

  title = title.toLowerCase();
  title += ' ';

  for (i; i < title.length; i++) {

    while (title[i] !== ' ') {

      if (i === 0 || title[i - 1] === ' ' || singleWord === 'Java' || singleWord === ' Java' || title[i - 1] === '-') {
        singleWord += title[i].toUpperCase();
      } else {
        singleWord += title[i];
      }
      i++;
    }

    if (singleWord.length <= 4 && i - singleWord.length !== 0 && title[i - (singleWord.length + 1)] !== ':' && singleWord !== ' Web') {
      singleWord = singleWord.toLowerCase();
    }

    if (singleWord === ' api') {
      singleWord = singleWord.toUpperCase();
    }

    fullString += singleWord;
    singleWord = ' ';

  }

  fullString = fullString.trim();
  return fullString;
}
