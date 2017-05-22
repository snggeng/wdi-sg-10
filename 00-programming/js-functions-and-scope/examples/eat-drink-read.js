// This one does not work as eat is undefined
eat && eat("hamburger");

// However drink is defined already even before the function declaration!
drink && drink("coffee");

// Assigning an anonymous function to the variable eat
var eat = function(food) {
  console.log("I am eating " + food);
};

// Declaring a named function called drink
function drink(thing) {
  console.log("I am drinking " + thing);
}

eat && eat("hotdog");
drink && drink("tea");

// This is the context
console.log(this);

// So you can do this too
this.read = function(book) {
  console.log("I am reading " + book);
};
this.read("The Secrets of JavaScript Ninja");
