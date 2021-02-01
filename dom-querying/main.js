console.log('hello, world');

var h1 = document.querySelector('h1');

console.log('h1 querySelector: ', h1);
console.dir(h1);

var explanation = document.querySelector('#explanation');

console.log('explanation querySelector: ', explanation);
console.dir(explanation);

var hint = document.querySelector('.hint');

console.log('hint querySelector: ', hint);
console.dir(hint);

console.log('p querySelectorAll: ', document.querySelectorAll('p'));

console.log('.example-link querySelectorAll: ', document.querySelectorAll('.example-link'));
