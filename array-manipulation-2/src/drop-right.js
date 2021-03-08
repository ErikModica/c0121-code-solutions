/* exported dropRight */

function dropRight(array, count) {
  const newArray = [];
  count = array.length - count;
  if (array.length > 0) {
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
