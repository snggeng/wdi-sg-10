var name = "John";
var hello = function() {
  console.log("Hello, I am the " + this.name);
};
hello();
var family = {
  grandpa: {
    name: "Grandpa",
    hello: hello,
    son: {
      name: "Daddy",
      hello: hello,
      son: {
        name: "Son",
        hello: hello
      }
    }
  }
}

family.grandpa.hello();
family.grandpa.son.hello();
family.grandpa.son.son.hello();

