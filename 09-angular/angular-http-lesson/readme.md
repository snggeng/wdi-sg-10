# Angular $http

### Objectives

- Use $http to access an API resource, rather than use hardcoded data

### Preparation

- Be able to start up a Node.js app
- Be able to create an Angular app with controllers
- Understand AJAX & RESTful routing

## Intro (10 mins)

We've only been working with hardcoded data so far. Today that changes; it's time to kick it up a notch.

We're going to learn a little about two different functionalities in Angular that will allow us to start communicating with real data, accessed through an API. You'll need to dust off your knowledge of RESTful routes & AJAX, but hopefully that's a good thing.

Now, since we're going to be interacting with an API, in an ideal world we'd force you to write one first. You totally could. But _because_ you could, and because we'd rather skip to the new stuff, let's use a pre-built backend for this lesson.

We want to make it fast, so we've already made you a sweet little Node API.

Now, real quick – we might want a little seed data. Take a minute and make some POST requests in CURL or whatever you like to add some presidents to our database. If you need some examples:

```json
[
  {name: 'George Washington', start: 1789, end: 1797 },
  {name: 'John Adams', start: 1797, end: 1801 },
  {name: 'Thomas Jefferson', start: 1801, end: 1809 },
  {name: 'James Madison', start: 1809, end: 1817 }
];
```

Once you have some, do a quick `GET` request to `http://localhost:3000/presidents` and make sure you've got some JSON.

## Demo of Starter Code (5 mins)

Okay, so we've included a bunch of [starter](https://github.com/wdi-hk-11/lesson-angular-http) code that looks quite a bit like the code you've already written. There's a controller, with some hardcoded data, listing out some of the Presidents in the United States. Hopefully [Wikipedia](https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States) is accurate, 'cuz who knows stuff like that off the top of their head?

It's our job to mush together this little API we have, and our Angular application.

We'll do this with two different methods, and this one is the first. The next will be in the next lesson.

<img width="752"  src="https://cloud.githubusercontent.com/assets/25366/9017871/7cf4a79e-378e-11e5-85d8-d018f0a7ab21.png">


## Hitting an API with $http - Codealong (30 mins)

The simplest starting point will be to switch our hardcoded array of presidents with the one living in our new API.

Step one – **let's delete our hardcoded data.** In `presidentsController.js`:

```diff
-  $scope.presidents = [
-    {name: 'George Washington', start: 1789, end: 1797 },
-    {name: 'John Adams', start: 1797, end: 1801 },
-    {name: 'Thomas Jefferson', start: 1801, end: 1809 },
-    {name: 'James Madison', start: 1809, end: 1817 }
-  ];

+  $scope.presidents = [];
```

With a little setup, we'll do a GET request to our API, and assign `this.all` to the array we get back. To do that, we're going to have to use an Angular library called `$http`.

### Injecting Dependencies

Angular dependencies – like libraries or plugins that other people have built – are defined first in our module (unless they come with Angular by default), and then _injected_ into any controllers that need to use them.

`$http` happens to come with Angular, so we only need to _inject_ it into our controller by declaring the dependency and then by simply passing an argument to our controller function.

In `js/presidentsController.js`:
```js
var thePresidentsApp = angular.module('ThePresidentsApp');

thePresidentsApp.controller('PresidentsController', ['$scope', '$http', function($scope, $http){
  // ... code not shown here
}
```

There are 2 occurences of `$http` in the controller declaration. The first tells the controller we intend to use this library called `$http`, the second allows us to pass the library in and gives it the name **$http**. Think of it just like any other argument in a function, such as **$scope** which you are already quite familiar with.

### Using $http is just AJAX!

`$http` is not very different than how we've used AJAX in the past, especially with jQuery. Let's see it all, then walk through it. In `js/presidentsController.js` again:

```js
thePresidentsApp.controller('PresidentsController', ['$scope', '$http', function($scope, $http){
  $scope.presidents = [];

  getPresidents();

  function getPresidents(){
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response){
        $scope.presidents = response.data.presidents;
    });
  }

  // ...
}
```
There are a few important things to note. First we have defined a regular JavaScript function `getPresidents` and inside we use `$http` to retrieve the president json data. **Question:** Do you know why we need to call this function **ONCE** inside the controller function?

Finally, let's check out what is going on with $http:
```js
// ...
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response){
        $scope.presidents = response.data.presidents;
    });
// ...
```

We call `$http`, then our favorite HTTP verb, `.get`. There's one for `.post`, too. It's asynchronous, so we'll use `.then` to make sure when it's _done_ it'll do what we want. And what we want is just to overwrite our `.presidents` array with the response we get back.

Feel free to `console.log(response)` and see everything that comes back. `.data` is just the data, `.presidents` is the key inside our JSON holding an array of presidents.

That's all we're doing in that function. Afterwords, we literally just run the function, which runs when we first load up the app. Easy.

<img width="752"  src="https://cloud.githubusercontent.com/assets/25366/9017871/7cf4a79e-378e-11e5-85d8-d018f0a7ab21.png">


## Independent Practice (20 minutes)

Now that we've got GETing down, it's up to you to try POSTing. Just like any RESTful API, you can add a new president by POSTing to the correct URL. You'll need to modify your controller action to send a new president from the form to our API, and probably look up the Angular documentation to figure out how to do it.

We'll be walking around helping you if you get stuck. In the last few minutes we can see how many people got it!

### Bonus (need more time if the class likes to attempt this)

Try these too if you are interested:

  1. Delete a president from the list. Believe it or not, it is **VERY** easy to do.
  2. Update a president. This is quite tricky because at this stage we are still stuck in one HTML file and it is still possible to implement this function using the existing HTML form. How can you do this?

## Conclusion (5 mins)
- How do you inject dependencies into an Angular controller?
- How do you use $http to do a GET request?
- How do you do a POST request?
- How do you do a DELETE request?
- How do you do a PUT request?
