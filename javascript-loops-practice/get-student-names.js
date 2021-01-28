/* exported getStudentNames */

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    for (var key in students[i]) {
      studentNames.push(students[i][key]);
    }
  }
  return studentNames;
}
