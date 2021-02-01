/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  count = array.length - count;
  if (array.length > 0) {
    for (count; count < array.length; count++) {
      newArray.push(array[count]);
    }
  }
  return newArray;
}
