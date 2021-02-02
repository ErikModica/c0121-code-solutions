var $bulbButton = document.querySelector('.bulb');
var $backgroundColor = document.querySelector('.background');
var switchOff = true;

$bulbButton.addEventListener('click', function (event) {

  if (switchOff) {
    $bulbButton.className = 'bulb bulb-light';
    $backgroundColor.className = 'background background-light';
    switchOff = false;
  } else if (!switchOff) {
    $bulbButton.className = 'bulb bulb-dark';
    $backgroundColor.className = 'background background-dark';
    switchOff = true;
  }
});
