/* exported chunk */

function chunk(array, size) {

  var returnAr = [];
  var sizeAr = [];

  for (var i = 0; i < array.length; i++) {

    sizeAr.push(array[i]);

    if (sizeAr.length === size || i === array.length - 1) {
      returnAr.push(sizeAr);
      sizeAr = [];
    }
  }
  return returnAr;
}
