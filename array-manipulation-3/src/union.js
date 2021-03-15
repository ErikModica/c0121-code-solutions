/* exported union */

function union(first, second) {
  const newArray = [];
  let isUnique = true;

  newArray.push(first[0]);

  for (let i = 1; i < first.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === first[i]) {
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
    for (let j = 0; j < newArray.length; j++) {
      if (second[i] === newArray[j]) {
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
