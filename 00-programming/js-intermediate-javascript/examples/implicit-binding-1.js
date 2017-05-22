// Implicit Binding
function eat() {
  console.log("I am eating " + this.food);
}

var willie = {
  food: "ramen",
  eat: eat
};
willie.eat(); // call-site
// call-site has a context object


var sarah = {
  food: "sushi",
  husband: willie
}
sarah.husband.eat();
// It is the immediate call-site that matters
