/* exported dropRight */

function dropRight(array, count) {
  var newArray = [];
  count = array.length - count;
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
