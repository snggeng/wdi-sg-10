var outerA = "I am the Outer A";
var joe = "I am the Outer Joe";
var jim = "I am the Outer Jim";

function displayString(str) {
  var innerA = "I am the Inner A";
  var joe = "I am the Inner Joe";
  jim = "I am the Inner Jim";
  
  console.log(outerA);
  console.log(innerA);
  console.log(joe);
  console.log(jim);

  console.log(str);
}

console.log("----- Before displayString -----");
displayString("Hello World");
console.log("----- After displayString -----");
console.log(joe);
console.log(jim);
console.log("\n\n");

function displayAndModifyNumber(value) {
  value = 100000;
  console.log(value);
}

console.log("----- Before displayAndModifyNumber -----");
var hundred = 100;
displayAndModifyNumber(hundred);
console.log("----- After displayAndModifyNumber -----");
console.log(hundred);


