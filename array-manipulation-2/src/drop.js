/* exported drop */

function drop(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (count; count < array.length; count++) {
      newArray.push(array[count]);
    }
  }
  return newArray;
}
