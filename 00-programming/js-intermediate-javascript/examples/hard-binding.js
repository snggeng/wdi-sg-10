// Hard Binding
var willieChoice = {
  food: "Ramen"
}

function eat(person) {
  console.log(person + " eats " + this.food);
}

eat("Willie");

eat.call(willieChoice, "Willie");

var sarahChoice = {
  food: "Sushi"
}

eat.call(sarahChoice, "Sarah");

// How can Willie force Sarah to have ramen with him?

function willieChooseLunch(person) {
  eat.call(willieChoice, person);
}

willieChooseLunch.call(sarahChoice, "Sarah");