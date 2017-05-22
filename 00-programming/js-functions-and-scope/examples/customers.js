var customers = [
    { firstname : 'Joe',  lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

// Sorting Function
var sortByName = function(c1, c2) {
  if (c1.name < c2.name) return -1;
  else if (c1.name > c2.name) return 1;
  else return 0;
};

// For Loop
var results = [];
for (var i=0; i<customers.length; i++) {
  if (customers[i].firstname.startsWith("J")) {
    results.push({
      name: customers[i].firstname + " " + customers[i].lastname
    });
  }
}
console.log(results.sort(sortByName));

// Functional Style
var startsWithJ = function(c) {
  return c.firstname.startsWith("J");
};

var replaceWithOneName = function(c) {
  return { name: [c.firstname, c.lastname].join(" ")};
};

results = customers.filter(startsWithJ).map(replaceWithOneName).sort(sortByName);
console.log(results);
