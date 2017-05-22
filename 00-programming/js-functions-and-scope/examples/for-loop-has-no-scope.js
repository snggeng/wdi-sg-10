// Function Scope - The naming paradox

var person = "Willie";

function displayPerson(person) {
  // Which person do I see?
  console.log(person);
}

displayPerson(person);
displayPerson("Denis")

console.log("-------");

// Function Scope - The naming parabox 2
var array = [1,2,3,4,5];
var i = 4;

for (i=0; i<array.length; i++) {
  var sum = (i === 0 ? 0 : sum + i);
  console.log(i);
}
console.log("After for-loop using i. i=" + i);
console.log("After for-loop using i. sum=" + sum);

for (var j=0; j<array.length; j++) {
  console.log(j);
}
console.log("After for-loop with var j: " + j);

// Because... every variables created are in the current context
console.log(this);
