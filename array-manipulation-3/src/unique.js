/* exported unique */

function unique(array) {
  const newArray = [];
  let isUnique = true;

  if (array.length === 0) {
    return newArray;
  }

  newArray.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === array[i]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      newArray.push(array[i]);
    } else {
      isUnique = true;
    }
  }
  return newArray;
}
