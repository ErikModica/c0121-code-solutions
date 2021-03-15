/* exported difference */

function difference(first, second) {
  const newArray = [];
  let isUnique = true;

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      newArray.push(first[i]);
    } else {
      isUnique = true;
    }
  }

  for (let i = 0; i < second.length; i++) {
    for (let j = 0; j < first.length; j++) {
      if (second[i] === first[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      newArray.push(second[i]);
    } else {
      isUnique = true;
    }
  }
  return newArray;
}
