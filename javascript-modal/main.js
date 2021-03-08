const $openButton = document.querySelector('.open-button');
const $modalDialog = document.querySelector('.modal-dialog');
const $container = document.querySelector('.container');
const $noButton = document.querySelector('.no-button');

$openButton.addEventListener('click', function (event) {
  $modalDialog.className = 'modal-dialog';
  $container.className = 'container';
  $openButton.className = 'open-button';
});

$noButton.addEventListener('click', function (event) {
  $modalDialog.className = 'modal-dialog hidden';
  $container.className = 'container hidden';
});
