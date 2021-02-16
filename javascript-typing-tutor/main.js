var $typedLetter = document.querySelector('body');
var $spanText = document.querySelectorAll('span');
var i = 0;

$spanText[0].className = 'current-letter';

$typedLetter.addEventListener('keydown', function (event) {

  if ($spanText[i].className === 'space current-letter' && event.code === 'Space') {
    $spanText[i].className = 'space';
    i++;
  }

  if (event.key === $spanText[i].textContent) {
    $spanText[i].className = ' right-letter';
    i++;
  } else if ($spanText[i].className !== 'space current-letter') {
    $spanText[i].className = 'wrong-letter';
  }

  if ($spanText[i].className !== 'space current-letter') {
    $spanText[i].className += ' current-letter';
  }
});
