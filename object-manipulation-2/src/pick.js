/* exported pick */

function pick(source, keys) {
  var newObject = {};
  var newIndex = 0;
  var testArray = [];
  var newKey;

  for (var testKey in source) {
    testArray.push(testKey);
  }

  if (testArray.length < keys.length) {
    var arrayDiff = keys.length - testArray.length;

    for (var i = 0; i < arrayDiff; i++) {
      newKey = 'newKey' + i;
      source[newKey] = 'forbiddenValue';
    }

    for (var key in source) {
      if (key === testArray[newIndex] && source[key] !== undefined) {
        newObject[key] = source[key];
        newIndex++;
      }
    }
  }

  for (var regKey in source) {
    if (regKey === keys[newIndex] && source[regKey] !== undefined) {
      newObject[regKey] = source[regKey];
      newIndex++;
    }
  }

  return newObject;
}

//   for (var key in source) {

//     if (key === keys[i]) {

//       console.dir(source);

//       console.log(key);
//       console.log(keys[i]);

//       newObject[key] = source[key];
//       i++
//     }

//     }
//     return newObject;

// }
