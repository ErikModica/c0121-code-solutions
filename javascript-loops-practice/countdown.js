/* exported countdown */

function countdown(number) {
  var array = [];
  for (number; number >= 0; number--) {
    array.push(number);
  }
  return array;
}
