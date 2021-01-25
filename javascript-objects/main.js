var student = {
  firstName: 'Erik',
  lastName: 'Modica',
  age: 22
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Assassin';

console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of object student: ', student);

var vehicle = {
  make: 'Ferrari',
  model: 'F40',
  year: 1987
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('value of color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of object vehicle: ', vehicle);

var pet = {
  name: 'Gerald',
  type: 'monkey'
};

delete pet.name;
delete pet.type;

console.log('value of object pet: ', pet);
