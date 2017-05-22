var Person = function(option) {
  this.firstName = option.f;
  this.lastName = option.l;
};

Person.prototype.hey = function() {
  console.log('Hey!! I am ' + this.firstName + " " + this.lastName);
};

var willie = new Person({
  f: "Willie",
  l: "Tong"
});
willie.hey();
console.log(willie);

var sarah = new Person({
  f: "Sarah",
  l: "Chow"
});
sarah.hey();
console.log(sarah);

