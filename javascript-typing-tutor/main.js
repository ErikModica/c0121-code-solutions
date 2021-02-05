var $typedLetter = document.querySelector('body');
var $spanText = document.querySelectorAll('span');
var i = 0;

$spanText[0].className = 'current-letter';

$typedLetter.addEventListener('keydown', function (event) {

  // console.log(event.key)
  // console.log($spanText[i].textContent)
  // console.log(i);
  // console.log(event.code);
  // console.log($spanText[i].className)

  if (event.key === $spanText[i].textContent) {
    $spanText[i].className = ' right-letter';
    if (event.code === 'Space') {
      $spanText[i].className += ' space';
    }
    i++;
  } else { $spanText[i].className = 'wrong-letter'; }

  if ($spanText[i].textContent === ' ') {
    $spanText[i].className += ' space';
  }

  $spanText[i].className += ' current-letter';

});
