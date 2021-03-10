/* exported pick */

// function pick(source, keys) {
//   var newObject = {};
//   var newIndex = 0;
//   var testArray = [];
//   var newKey;

//   for (var testKey in source) {
//     testArray.push(testKey);
//   }

//   if (testArray.length < keys.length) {
//     var arrayDiff = keys.length - testArray.length;

//     for (var i = 0; i < arrayDiff; i++) {
//       newKey = 'newKey' + i;
//       source[newKey] = 'forbiddenValue';
//     }

//     for (var key in source) {
//       if (key === testArray[newIndex] && source[key] !== undefined) {
//         newObject[key] = source[key];
//         newIndex++;
//       }
//     }
//   }

//   for (var regKey in source) {
//     if (regKey === keys[newIndex] && source[regKey] !== undefined) {
//       newObject[regKey] = source[regKey];
//       newIndex++;
//     }
//   }

//   return newObject;
// }

function pick(source, keys) {
  const pickedObj = {};

  for (let i = 0; i < keys.length; i++) {
    for (keys[i] in source) {
      pickedObj[keys[i]] = source[keys[i]];
    }
  }
  console.log(pickedObj);
}

const testObj = { firstName: 'Evil', lastName: 'Ewok' };
const testArr = ['lastName'];
