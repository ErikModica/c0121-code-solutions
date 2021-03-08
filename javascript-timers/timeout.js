const $text = document.querySelector('h1');

function sayHello() {
  $text.textContent = 'Hello There';
}

setTimeout(sayHello, 2000);
