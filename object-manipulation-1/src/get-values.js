/* exported getValues */

function getValues(object) {
  var keyArray = [];

  for (var key in object) {
    keyArray.push(object[key]);
  }
  return keyArray;
}
