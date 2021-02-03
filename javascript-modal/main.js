var $openButton = document.querySelector('.open-button');
var $modalDialog = document.querySelector('.modal-dialog');
var $container = document.querySelector('.container');
var $noButton = document.querySelector('.no-button');

$openButton.addEventListener('click', function (event) {
  $modalDialog.className = 'modal-dialog dialog-active';
  $container.className = 'container container-active';
  $openButton.className = 'open-button open-active';
});

$noButton.addEventListener('click', function (event) {
  $modalDialog.className = 'modal-dialog';
  $container.className = 'container';
  $openButton.className = 'open-button';
});
