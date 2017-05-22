var person = {
  firstName: "Willie",
  lastName: "Tong",
  middleName: "ABCD",
  displayName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person);
console.log(person.displayName());
console.log("\n\n\n\n");

// Delete the middleName property
delete person.middleName;

// Delete the displayName property which is a function
delete person.displayName;
console.log(person);
console.log(person.displayName());
