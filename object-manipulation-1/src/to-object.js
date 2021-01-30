/* exported toObject */

function toObject(keyValuePair) {
  var newObject = {};
  var newKey = keyValuePair[0];
  var newValue = keyValuePair[1];

  newObject[newKey] = newValue;

  return newObject;
}
