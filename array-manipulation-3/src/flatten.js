/* exported flatten */

function flatten(array) {

  var newArray = [];
  var arrayIndexTest;

  for (var i = 0; i < array.length; i++) {
    arrayIndexTest = Array.isArray(array[i]);

    if (arrayIndexTest) {
      for (var insideI = 0; insideI < array[i].length; insideI++) {
        newArray.push(array[i][insideI]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
