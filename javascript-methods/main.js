var num1 = 32;
var num2 = -12;
var num3 = 16;

var maximumValue = Math.max(num1, num2, num3);

console.log('Max Value: ', maximumValue);

var heroes = ['deadpool', 'batman', 'ironman', 'spiderman'];
var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Random Index Value: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random Hero: ', randomHero);

var library = [
  {
    title: 'Clifford the Big Red Dog',
    author: 'Norman Bridwell'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding'
  }
];

var lastBook = library.pop();

console.log('Last book in library: ', lastBook);

var firstBook = library.shift();

console.log('First book in library: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library array: ', library);

var fullName = 'Erik Modica';
var firstAndLastName = fullName.split(' ');

console.log('First and last name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('Say my name value: ', sayMyName);
