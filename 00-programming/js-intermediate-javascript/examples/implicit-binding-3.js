// Implicit Binding... is Implicitly Lost in Callback!!
function eat() {
  this.food.forEach(function(food){
    console.log(this.name + " is eating " + food);
  });
}

var willie = {
  name: 'Willie',
  food: ["Shoyu Ramen", "Kitakata Ramen", "Miso Ramen", "Tonkotsu Ramen"],
  eat: eat
};

willie.eat(); // Who's having the ramens?



