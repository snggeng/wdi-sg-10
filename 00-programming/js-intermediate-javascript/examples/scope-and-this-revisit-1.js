function foo(b) {
  var a = 2;
  console.log('foo.a = ' + foo.a);
  console.log('this.a = ' + this.a);
  console.log('a = ' + a);
  console.log();
  console.log('foo.b = ' + foo.b);
  console.log('this.b = ' + this.b);
  console.log('b = ' + b);
  console.log();
  console.log(this);
}

foo(100);
/*
console.log("-----");
var a = "Global A";
foo(200);
console.log("-----");
foo.a = 10;
foo(300);
console.log("-----");
foo.call(foo, 400);
*/