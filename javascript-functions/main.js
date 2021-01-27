function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('Minutes to Seconds Function(5): ', convertMinutesToSeconds(5));

function greet(name) {
  return 'Yo, waddup ' + name;
}

console.log('Greeting Function: ', greet('Gerald'));

function getArea(width, height) {
  return width * height;
}

console.log('Area Function(17, 42): ', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('Get First Name Function: ', getFirstName({ firstName: 'Joe', lastName: 'Mama' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('Get Last Element Function: ', getLastElement(['propane', 'and', 'propane', 'acessories']));
