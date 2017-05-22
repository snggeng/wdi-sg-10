var jedi = {
  name: "Yoda",
  meditate: function() {
    console.log(this.name + " said: Meditate on this I will.");
  }
}

console.log(jedi.name);
jedi.meditate();

jedi.meditate = function() {
  console.log(this.name + " said: Try not. Do. Or do not.");
}
jedi.meditate();

function meditate() {
  console.log(this.name + " said: You have to unlearn what you have learned.");
}
jedi.meditate = meditate;
// Whoa! What's going on here?
meditate();
jedi.meditate();

console.log(this);
