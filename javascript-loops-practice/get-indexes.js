/* exported getIndexes */

function getIndexes(array) {
  var indexes = [];
  for (var i = 0; array.length > i; i++) {
    indexes.push(i);
  }
  return indexes;
}
