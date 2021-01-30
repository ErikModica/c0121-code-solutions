/* exported oddOrEven */

function oddOrEven(numbers) {
  var wordArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      wordArray.push('even');
    } else {
      wordArray.push('odd');
    }
  }
  return wordArray;
}
