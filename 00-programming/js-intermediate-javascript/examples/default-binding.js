// Default Binding
function eat() {
  console.log("I am eating " + this.food);
}

var food = "an apple";

eat();  // call-site