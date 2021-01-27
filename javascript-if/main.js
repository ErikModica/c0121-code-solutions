/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return (number % 2) === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return (person.name === 'Rick Sanchez') && (person.age === 70);
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'pH is neutral';
  } else if ((pH >= 0) && (pH < 7)) {
    return 'pH is acidic';
  } else if ((pH > 7) && (pH <= 14)) {
    return 'pH is basic';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
