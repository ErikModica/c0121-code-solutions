/* exported equal */

function equal(first, second) {
  var combinedLength = Math.round(first.length + second.length / 2);
  var isEqual;
  var i = 0;

  while (first[i] === second[i] && i < combinedLength) {
    isEqual = true;
    i++;
  }
  if (i < combinedLength) {
    isEqual = false;
  }
  return isEqual;
}
