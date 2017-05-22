// Function Scope
var array = [1,2,3,4,5];
for (i=0; i<array.length; i++) {
  var sum = (i === 0 ? 0 : sum + i);
  console.log(i);
}

// I can see sum even though sum was declared in a for loop code block
console.log(sum);

console.log("-------");
// But it is NOT the case in a function
function multiplyArray(array) {
  var product = 1;
  for (var j=0; j<array.length; j++) {
    product *= array[j];
  }
  return product;
}
console.log();
// Function has its own scope!!
//console.log(product);
//console.log(j);
console.log(multiplyArray([1,2,3,4,5]));
console.log(this);


