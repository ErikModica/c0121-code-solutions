const $text = document.querySelector('h1');

function countdown() {
  let num = $text.textContent;
  num = parseInt(num);
  num--;
  $text.textContent = num;
  if (num <= 0) {
    clearInterval(setInterv);
    $text.textContent = '~Earth Beeeelooowww Us~';
  }
}

var setInterv = setInterval(countdown, 1000);
