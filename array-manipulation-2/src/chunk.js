/* exported chunk */

function chunk(array, size) {
  var returnArray = [];
  var sizeCount = 0;
  var sizeArray = [];

  for (var i = 0; i <= array.length; i++) {

    if (sizeCount !== size) {
      sizeArray.push(array[i]);
    } else {
      returnArray.push(sizeArray);
      sizeArray = [];

      sizeArray.push(array[i]);
      if (array[i] !== undefined) {
        sizeCount = 0;
      }
    }
    sizeCount++;
  }
  return returnArray;
}
