/* exported zip */

function zip(first, second) {

  var newContainerArray = [];
  var newZipArray = [];
  var shorterArrayLength = first.length < second.length;

  if (shorterArrayLength) {
    shorterArrayLength = first.length;
  } else {
    shorterArrayLength = second.length;
  }

  for (var i = 0; i < shorterArrayLength; i++) {
    newZipArray.push(first[i], second[i]);
    newContainerArray.push(newZipArray);
    newZipArray = [];
  }
  return newContainerArray;
}
