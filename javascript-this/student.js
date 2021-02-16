/* exported student */
var student = {
  firstName: 'Erik',
  lastName: 'Modica',
  subject: 'Japanese',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
