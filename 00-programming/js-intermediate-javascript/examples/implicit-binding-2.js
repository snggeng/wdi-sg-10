// Implicit Binding... is Implicitly Lost
function eat() {
  console.log("I am eating " + this.food);
}

var willie = {
  food: "ramen",
  eat: eat
};

var lunch = willie.eat;  // function reference/alias only

var food = "sushi";

lunch(); // what are you eating?




