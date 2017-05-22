// Eat different kinds of food in different meals, yay!
var food = "ramen";

function meal() {
  var willie = {
    name: 'Willie'
  };
  
  function eat() {
    console.log(willie.name + " eats " + this.food);
  }
  
  return eat;
}

var lunch = meal();
var dinner = meal();

lunch();

food = "sushi";
dinner();

// Go to Osaka!!
var osaka = {
  food: "okonomiyaki"
};
meal().call(osaka);