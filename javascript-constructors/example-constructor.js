function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var newExampConstructObj = new ExampleConstructor();
console.log('value of newExampConstructObj: ', newExampConstructObj);

var instanceOfExampleConstructorInVar = newExampConstructObj instanceof ExampleConstructor;
console.log('value of instanceOfExampleConstructorInVar: ', instanceOfExampleConstructorInVar);
