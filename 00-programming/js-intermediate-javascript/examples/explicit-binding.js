// Explicit Binding
function eat(food) {
  console.log(this.name + " is eating " + food);
}

function lunch() {
  var food = [];
  for (var i in arguments) {
    food.push(arguments[i]);
  }
  food.forEach(eat, this);
}

var willie = {
  name: 'Willie'
};

var sarah = {
  name: 'Sarah'
};

var ramens = ["Shoyu Ramen", "Kitakata Ramen", "Miso Ramen", "Tonkotsu Ramen"];


// How can we let Sarah have some sushi?
/*
eat.call(sarah, "sushi");
eat.apply(sarah, ["milkshake"]);
*/

// How do we make Willie eat the ramens ONE at a time?
/*
lunch.apply(willie, ramens);
console.log();
lunch.call(willie, "Shoyu Ramen", "Kitakata Ramen", "Miso Ramen", "Tonkotsu Ramen");
*/