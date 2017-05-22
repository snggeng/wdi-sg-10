var jedi = {
  lightsaber: "blue"
};

var sith = {
  lightsaber: "red"
};

var anakin = Object.create(jedi);
console.log("Color of Anakin's lightsaber?", anakin.lightsaber);
console.log("Jedi's Prototype:", Object.getPrototypeOf(jedi));
console.log("Anakin's Prototype: ", Object.getPrototypeOf(anakin));
console.log("Is Anakin's a Jedi?", Object.getPrototypeOf(anakin) === jedi);

console.log("\nAnakin is consumed by the Dark Side...\n");
Object.setPrototypeOf(anakin, sith);

console.log("Color of Anakin's lightsaber?", anakin.lightsaber);
console.log("Sith's Prototype:", Object.getPrototypeOf(sith));
console.log("Anakin's Prototype: ", Object.getPrototypeOf(anakin));
console.log("Is Anakin's a Jedi?", Object.getPrototypeOf(anakin) === jedi);
console.log("Is Anakin's a Sith?", Object.getPrototypeOf(anakin) === sith);

console.log("\n---------\n");

var yoda = Object.create(jedi);
var obiwan = Object.create(jedi);
console.log("Initaial lightsaber color:");
console.log("Color of Yoda's lightsaber?", yoda.lightsaber);
console.log("Color of Obi-Wan's lightsaber?", obiwan.lightsaber);
console.log("Does Yoda have his own lightsaber?", yoda.hasOwnProperty('lightsaber'));

yoda.lightsaber = "green";
console.log("\nChange Yoda's lightsaber color:");
console.log("Color of Yoda's lightsaber?", yoda.lightsaber);
console.log("Color of Obi-Wan's lightsaber?", obiwan.lightsaber);
console.log("Does Yoda have his own lightsaber?", yoda.hasOwnProperty('lightsaber'));

console.log("\nChange all Jedi's lightsaber color:");
jedi.lightsaber = "purple";
console.log("Color of Yoda's lightsaber?", yoda.lightsaber);
console.log("Color of Obi-Wan's lightsaber?", obiwan.lightsaber);