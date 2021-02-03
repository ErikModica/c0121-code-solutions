function handleFocus(event) {
  console.log('focus event fired');
  console.log('value of target name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('value of target name: ', event.target.name);
}

function handleInput(event) {
  console.log('value of ' + event.target.name + ': ', event.target.value);
}

var $nameControlForm = document.querySelector('#user-name');
var $emailControlForm = document.querySelector('#user-email');
var $messageControlForm = document.querySelector('#user-message');

$nameControlForm.addEventListener('focus', handleFocus);
$nameControlForm.addEventListener('blur', handleBlur);
$nameControlForm.addEventListener('input', handleInput);

$emailControlForm.addEventListener('focus', handleFocus);
$emailControlForm.addEventListener('blur', handleBlur);
$emailControlForm.addEventListener('input', handleInput);

$messageControlForm.addEventListener('focus', handleFocus);
$messageControlForm.addEventListener('blur', handleBlur);
$messageControlForm.addEventListener('input', handleInput);
