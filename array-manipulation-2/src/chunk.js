/* exported chunk */

function chunk(array, size) {

  const returnAr = [];
  let sizeAr = [];

  for (let i = 0; i < array.length; i++) {

    sizeAr.push(array[i]);

    if (sizeAr.length === size || i === array.length - 1) {
      returnAr.push(sizeAr);
      sizeAr = [];
    }
  }
  return returnAr;
}
