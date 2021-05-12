// # JS Closures / Scoping exercises

// 1. What’s the result of executing this code and why.
//   ```
// function test() {
//   console.log(a);
//   console.log(foo());

//   var a = 1;

//   function foo() {
//     return 2;
//   }
// }

// test();
// My answer: 'a' remain 'undefined', because it will be give a value AFTER displaying it

// 2. What is result?
//   ```
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
//   My answer: 'result' is 5, because the value is being assigned to 'a' before calling the function inside, which returns 'a'

// 3. What is the result of the following code? Explain your answer.
//   ```
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());
// My answer: Displayed is the new value of 'fullname' : "Aurelio De Rosa", because it is being re-assigned inside the closure function

var test = obj.prop.getFullname();
console.log(test);
// My answer: 'test' displays 'undefined*, because there are missing () when calling 'getFullName - and to console.log 'test' (without '()'); so it will be displaying 'Aurelio De Rosa'

// 4. What will you see in the console for the following example?
//   ```
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

// My answer: 1
