var $typedLetter = document.querySelector('body');
var $spanText = document.querySelectorAll('span');
var i = 0;
var ifSpace = false;

$spanText[0].className = 'current-letter';

$typedLetter.addEventListener('keydown', function (event) {

  // console.log(event.key)
  // console.log($spanText[i].textContent)
  // console.log(i);
  // console.log(event.code);
  // console.log($spanText[i].className)

  if ($spanText[i].className === 'space current-letter') {
    ifSpace = true;
  }

  // console.log(ifSpace);

  if (event.key === $spanText[i].textContent) {
    $spanText[i].className = ' right-letter';
    if (event.code === 'Space') {
      $spanText[i].className += ' space';
    }
    i++;
  } else { $spanText[i].className = 'wrong-letter'; }
  // if (event.code === 'Space') {
  //   $spanText[i].className = 'wrong-letter space';
  // }

  $spanText[i].className += ' current-letter';

  if (ifSpace) {
    $spanText[i].className += ' space';
  }

  ifSpace = false;

});

//     if (event.key === $spanText[i].textContent) {
//       console.log('i love you');
//       $spanText[i].className = 'right-letter';
//     }
//   i++;
// }

// $span.textContent = 'fuck u'
