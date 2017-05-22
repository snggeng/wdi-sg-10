# Callbacks

### Objectives
*After this lesson, students will be able to:*

- Explain the concept of a 'callback' and how we can pass functions as arguments to other functions
- Describe the difference between asynchronous and synchronous program execution, and why callbacks are important to asynchronous program flow
- Pass a named function as a callback to another function
- Pass an anonymous function as a callback to another function


### Preparation
*Before this lesson, students should already be able to:*

- Write and call functions in javascript
- Explain what an anonymous function is in javascript


## Callbacks - Intro (5 mins)

Callback functions are derived from a programming paradigm known as **functional programming**. At a fundamental level, functional programming specifies the use of functions as arguments. Functional programming was — and still is, though to a much lesser extent, today — seen as an esoteric technique of specially trained master programmers.

#### What is a Callback/Higher-order Function?

A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. A callback function is essentially a pattern (an established solution to a common problem), and therefore, the use of a callback function is also known as a callback pattern.

## Examples of Callbacks - Demo (15 mins)

Let's walk through a couple of examples of code that utilize callbacks:

> Note: Be sure to walk through these code snippets slowly.

```javascript
var element = document.getElementsByTagName("body")[0];

element.addEventListener("click", function(){
  console.log("Executed in the callback function.");
})
```

Another example within a `forEach` loop:

```javascript
var friends = ["Mike", "Stacy", "Andy", "Rick"];
​
friends.forEach(function(eachName, index){
  console.log(index + 1 + ". " + eachName);
});
```

We have passed an anonymous function (a function without a name) to the forEach method as a parameter.

By the way, we could have re-written this using a named function.

```javascript
function loopyName(eachName, index){
  console.log(index + 1 + ". " + eachName);
};

var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(loopyName);
```


## How Callback Functions Work? Discussion (10 mins)

We can pass functions around like variables and return them in functions and use them in other functions.  When we pass a callback function as an argument to another function, we are only **passing the function definition**.

We are **not executing the function** in the parameter. In other words, we aren’t passing the function with the trailing pair of executing parenthesis `()` like we do when we are executing a function.

Note that the callback function is not executed immediately. It is “called back” (hence the name) at some specified point inside the containing function’s body.

#### Callback Functions Are Closures!

When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function.

This means the callback is a closure.

Closures have access to the containing function’s scope, so the callback function can access the containing functions’ variables, and even the variables from the global scope.


## Named Functions as Callbacks - Codealong (15 mins)

It is a common pattern to use an anonymous function as a callback. However, you can use a named function, too!

Take this code, and past it into your text editor:

```javascript
// global variable​
var allUserData = [];

// generic logStuff function that prints to console​
function logStuff(userData) {
  if (typeof userData === "string") {
    console.log(userData);
  } else if (typeof userData === "object") {
    for (var item in userData) {
      console.log(item + ": " + userData[item]);
    }
  }
}

// A function that takes two parameters, the last one a callback function
function getInput(options, callback) {
  allUserData.push(options);
  callback(options);
}
```


When we call the `getInput` function, we pass `logStuff` as a parameter - `​logStuff` will called back (or executed) inside the getInput function​

```javascript
getInput({name:"Alex", speciality:"JavaScript"}, logStuff);
```


Since the callback function is just a normal function when it is executed, we can pass parameters to it!

We can pass any of the containing function’s properties (or global properties) as parameters to the callback function.

By the way, you can always check a callback is a function before executing it:

```javascript
if (typeof callback === "function") {
  callback(options);
}
```

## `this` and Callbacks Problems - Codealong (20 mins)

When the callback function is a method that uses the `this` object, we have to modify how we execute the callback function to preserve the `this` object context.

Let's define an object with some properties and a method​. We will later pass the method as a callback function to another function​:

```javascript
var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object​
  setUserName: function(firstName, lastName)  {
    // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput(firstName, lastName, callback) {
  callback(firstName, lastName);
}

getUserInput("Barack", "Obama", clientData.setUserName);

console.log (clientData.fullName);
//=> Not Set

console.log (window.fullName);
//=> Barack Obama
```

Since `getUserInput` is a global function, `this` points to the window object.

#### Use the `Call` or `Apply` Function To Preserve `this`

We can fix the preceding problem by using the `Call` or `Apply` function.

Every function in JavaScript has two methods: `Call` and `Apply`. And these methods are used to set the this object inside the function and to pass arguments to the functions.

- [`Call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) takes the value to be used as the `this` object inside the function as the **first parameter**, and the remaining arguments to be passed to the function are passed individually (separated by commas of course).
- [`Apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) function’s first parameter is also the value to be used as the `this` object inside the function, while the last parameter is an array of values (or the arguments object) to pass to the function.

Let's walk through an example by defining another object with properties and a method and pass the method as a callback later:

```javascript
var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object​
  setUserName: function (firstName, lastName)  {
    // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput(firstName, lastName, callback, callbackObj)  {
  // The use of the Apply function below will set the this object to be callbackObj​
  callback.apply(callbackObj, [firstName, lastName]);
}
getUserInput("Barack", "Obama", clientData.setUserName, clientData);

console.log(clientData.fullName);
//=> Barack Obama
```

## Independent Practice (20 mins)

> ***Note:*** _This can be a pair programming activity or done independently._

Open the [starter-code](starter-code) and try to work through both exercises with a partner.  Do your best!

## Conclusion (5 mins)
- Describe callbacks, at a high level.
- Explain why you don't pass callbacks as parameters with parenthesis.
