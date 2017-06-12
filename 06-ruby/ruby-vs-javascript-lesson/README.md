# Ruby v JavaScript : Ruby Intro for JavaScript Developers

### Objectives
*After this lesson, students will be able to:*

- Quickly leverage their knowledge in JavaScript and reapply them in Ruby
- Identify some of the gotchas in Ruby from the point of view of a JavaScript developer

### Preparation
*Before this lesson, students should already be able to:*

- Do JavaScript programming!!

### Table of Contents

- [Ruby v JavaScript](#ruby-v-javascript)
  - [Round 1: The usual stuff](#round-1-the-usual-stuff)
    - [Statements and Variables](#statements-and-variables)
    - [Do you have any comments?](#do-you-have-any-comments)
    - [Debugging](#debugging)
    - [All That String](#all-that-string)
    - [Pre/Post Increment/Decrement Operator](#prepost-incrementdecrement-operator)
    - [Everything has a value](#everything-has-a-value)
  - [Round 2: Functions](#round-2-functions)
    - [Declaration](#declaration)
    - [No more hoisting](#no-more-hoisting)
    - [Default value of function parameter](#default-value-of-function-parameter)
    - [Variable-Length Argument List](#variable-length-argument-list)
    - [Scope 101](#scope-101)
  - [Round 3: Math and Numbers](#round-3-math-and-numbers)
    - [Math Library](#math-library)
    - [Numbers](#numbers)
  - [Round 4: Conditionals (same thing, different syntax)](#round-4-conditional-same-thing-different-syntax)
  - [Round 5: Truthy and Falsey](#round-5-truthy-and-falsey)
  - [Round 6: Arrays and Blocks](#round-6-arrays-and-blocks)
    - [Basics](#basics)
    - [This is where the fun begins](#this-is-where-the-fun-begins)
    - [Array Iteration](#array-iteration)
    - [It is a block!!](#it-is-a-block)
  - [Round 7: Symbols](#round-7-symbols)
    - [The many ways of creating symbols](#the-many-ways-of-creating-symbols)
    - [Symbols vs Strings](#symbols-vs-strings)
  - [Round 8: Hashes](#round-8-hashes)
    - [Declaration](#declaration-1)
    - [Get and Set values](#get-and-set-values)
    - [Navigate a Hash](#navigate-a-hash)
    

## Ruby v JavaScript

This is not exactly a death match of the two programming languages but it is more like a quick start guide for JavaScript programmer who is learning Ruby for the first time.

### Round 1: The usual stuff

#### Statements and Variables
In Ruby, you don't need to use `var` when you declare variables and you also don't need to add `;` after every statement.

*Ruby*
```ruby
batman = 'Bruce Wayne'
```
*JavaScript*
```javascript
var batman = 'Bruce Wayne';
```

#### Do you have any comments?

*Ruby*
```ruby
# Hello, I am a comment
```
*JavaScript*
```javascript
// Hello I am a line of comment

/*
 Hello we are comments
 Hello we are comments
 Hello we are comments
 */
```

#### Debugging
In Ruby, you cannot `console.log` everything because `console.log` is a JavaScript thing. Instead, **puts EVERYTHING**.

*Ruby*
```ruby
puts 'Willie will kick you if you stare at the screen for half an hour without adding a line of puts to debug!!!'
```

*JavaScript*
```javascript
console.log('Willie will kick you if you stare at the screen for half an hour without adding a line of console.log to debug!!!');
```

#### All That String
You can use `"` (double quote) or `'` (single quote) to define a string in Ruby, as in JavaScript. Here we will look at how you can concat string values together using **string interpolation**.

*Ruby*
```ruby
# Yes you can still do this
first_name = 'Tony'
last_name = "Stark"
puts first_name + ' ' + last_name

# But this is what a Ruby pro will do
puts "#{first_name} #{last_name}"

# However you cannot use single-quote to do interpolation
puts '#{first_name} #{last_name}'     # this is incorrect, try it and see what it will print
```
*Javascript*
```javascript
var first_name = 'Tony';
var last_name = "Stark";
console.log(first_name + ' ' + last_name);

//In fact, in newer version of JS, you can also do interpolation
console.log(`${first_name} ${last_name}`);
```

#### Pre/Post increment/decrement operator
Ruby has no pre/post increment/decrement operator. So those `i++` and `i--` expressions will not work. Instead, we should use `i+=1` or just the plain old school `i = i + 1`.

*Ruby*
```ruby
x += 1
x -= 1
```
*JavaScript*
```javascript
x++;
x--;
```

#### Everything has a value
In JavaScript, every expression and statement can be evaluated into a value and function can also return a value. These are also true in Ruby. However, in Ruby, even if-else statement can be evaluated into a value.

*Ruby*
```ruby
# not necessarily a good practice
hero = "batman"
alter_ego = if hero == "batman"
              "Bruce Wayne"
            else
              "Clark Kent"
            end

puts alter_ego
```
*JavaScript*
```javascript
// Well, you cannot do this in JavaScript, period.
```

### Round 2: Functions

#### Declaration
In Ruby, we use `def` to declare(define) a function. You do not necessarily need to use `( )` to wrap around the parameter list and even the `return` keyword is optional. A Ruby function will automatically return the **LAST** value evaulated.

When you call a function in Ruby, the `( )` is also optional. For multiple parameters, you still need to use `,` to separate them.

*Ruby*
```ruby
# miss this function? 
def sleep
  "Don't wake me."
end

def eat(food)
  "I am eating #{food}."
end

def drink beverage
  "I am drinking #{beverage}."
end

def eat_and_drink food, beverage
  puts eat food
  puts drink beverage
end

puts sleep
puts eat 'ramen'
puts drink('craft beer')
eat_and_drink 'sushi', 'green tea'
```
*JavaScript*
```javascript
function sleep() {
  return "Don't wake me."
}

function eat(food) {
  return `I am eating ${food}`;
}

function drink(beverage) {
  return `I am drinking ${beverage}.`;
}

function eat_and_drink(food, beverage) {
  console.log(eat(food));
  console.log(drink(beverage));
}

console.log(sleep());
console.log(eat('ramen'));
console.log(drink('craft beer'));
eat_and_drink('sushi', 'green tea');
```

#### No more hoisting
In Ruby, you should always define a functioin **before** you call it. It is as simple as that.

*Ruby*
```ruby
this_is_not_javascript

def this_is_not_javascript
  puts "This is not the language you are looking for."
end

# => NameError: undefined local variable or method `this_is_not_javascript'
```
*JavaScript*
```javascript
thisIsJavaScript();

function thisIsJavaScript() {
  console.log("Look Ma! I see hoisting!");
}
```

#### Default value of function parameter
In Ruby, you can define a default value of your optional function parameter. Whereas in JavaScript, you need to use the `||` operator trick inside the function body.

*Ruby*
```ruby
def eat(food = 'ramen')
  puts "I am eating #{food}"
end

eat            # for the undecided
eat 'sushi'    # for the opinionated
```

*JavaScript*
```javascript
function eat(food) {
  food = food || 'ramen';
  console.log("I am eating " + food);
}

eat();
eat('sushi');
```

#### Variable-Length Argument List
In JavaScript, there is a hidden `arguments` variable in every function defined. We usually use it to capture an variable-length argument list of a function. In Ruby, we have something similar too. In fact, it looks much nicer in Ruby because it is an actual array. Whereas in JavaScript, it is **not** a new array.

*Ruby*
```ruby
def eat(*food)
 puts "I am eating #{food.join ', '}"
end

eat 'sushi', 'ramen', 'okonomiyaki'
```

*JavaScript*
```javascript
function eat() {
  var food = Array.prototype.slice.call(arguments);
  console.log("I am eating " + food.join(', '));
}

eat('sushi', 'ramen', 'okonomiyaki');
```

#### Scope 101
You may recall the global scope in JavaScript. If you cannot find a variable within a function, JavaScript will attempt to find it in the global scope. 

*JavaScript*
```javascript
var outer_food = 'ramen';

function eat(food) {
  console.log("I am eating " + food + " and " + outer_food);  // this.outer_food works too
}

eat('sushi');
// Look Ma! I see Global Variable!
```

But you cannot do this in Ruby.

*Ruby*
```ruby
outer_food = 'ramen'

def eat(food)
  puts "I am eating #{food} and #{outer_food}"
end

eat('sushi')
# => undefined local variable or method `outer_food'
```

In Ruby, you have to define a global variable explicitly (**DO NOT** do this without a good reason) with a `$` at the front of the variable name.

*Ruby*
```ruby
$outer_food = 'ramen'

def eat(food)
  puts "I am eaiting #{food} and #{$outer_food}"
end

eat('sushi')
# Look Ma! I see Global Variable in Ruby!
```

### Round 3: Math and Numbers

#### Math Library
In Ruby, even numbers are objects so they have some arithmetic methods built in already. The Ruby Math module is reserved for basic trigonometric and transcendental functions only. Whereas in JavaScript, the Math library contains everything.

In addition, Ruby Array also has some built-in methods that can help find the maximum and minimum value from a collection.

*Ruby*
```ruby
puts 2**2           # 2^2 = 4
puts -1.abs         # 1
puts 1.3.ceil       # 2
puts 1.3.floor      # 1
puts 1.3.to_i       # 1      Truncate - convert a Float to a Integer, yay!
puts Math::sqrt 4   # 2.0
puts [1,2,3].max    # 3
puts [1,2,3].min    # 1
```

*JavaScript*
```javascript
console.log(Math.pow(2,2));
console.log(Math.abs(-1));
console.log(Math.ceil(1.3));
console.log(Math.floor(1.3));
console.log(Math.trunc(1.3));
console.log(Math.sqrt(4));
console.log(Math.max(...[1,2,3]));   // Need the new spread operator
console.log(Math.min(...[1,2,3]));   // Need the new spread operator
```

#### Numbers
The number literals you type in Ruby IRB (console) are instances of the class `Fixnum` (if you don't understand what a class is right now, no worries. Know it soon, you will). As you have seen earlier, there are many interesting methods you can invoke on a number. Here are some more:

*Ruby*
```ruby
puts 1.class            # Fixnum
puts 1.next             # 2
puts 1.succ             # same as :next
puts 1.next.next.next   # 4
puts 1.odd?             # true
puts 1.even?            # false
puts 2.even?            # true
puts 1.zero?            # false
puts 0.zero?            # true
puts 1.to_s.class       # String
puts 1.to_f             # 1.0
```

Another classic issue related to Numbers is... **division**. In Ruby, if you divide a Fixnum with a Fixnum, you will always get back a Fixnum. So you have to convert one of the Fixnum into a Float first. Whereas in JavaScript, you won't see this issue.

This phenomonen is known as [Type Coercion](https://practicingruby.com/articles/duck-typing-in-practice-2) in most Object-Oriented Language. A more common way to describe this is called [Duck Typing](https://en.wikipedia.org/wiki/Duck_typing).

>
> When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.
> 

*Ruby*
```ruby
puts 3 / 2              # 1
puts 3 / 2.0            # 1.5
puts 3 / 2.to_f         # 1.5
```

*JavaScript*
```javascript
console.log(3/2);       # 1.5
```

### Round 4: Conditional (same thing, different syntax)

Conditional statements works the same way in both Ruby and JavaScript. Just pay attention to the difference in syntax, for example, we don't use `{ }` in Ruby. Also you will find the **one-liner** style in Ruby very interesting.

*Ruby*
```ruby
hungry = true

# No { }
if hungry
  puts "I am hungry."
end

# ( ) is optional
if (hungry)
  puts "I am still hungry."
end

# One Liner is cool!!
puts "Trust me, I am really hungry" if hungry

very_hungry = true

# Note the elsif keyword
if very_hungry
  puts "Eat 2 bowls of ramen"
elsif hungry
  puts "Eat 1 bowl of ramen"
else
  puts "Eat an apple"
end

# unless means "if not"
hungry = false
puts "Eat an orange" unless hungry
```

In JavaScript, there is not much we can do.
```javascript
var hungry = true;

if (hungry) {
  console.log("I am still hungry.");
}

var very_hungry = true

if (very_hungry) {
  console.log("Eat 2 bowls of ramen");
} else if (hungry) {
  console.log("Eat 1 bowl of ramen");
} else {
  consoloe.log("Eat an apple");
}
```

### Round 5: Truthy and Falsey

If you guess that there is a class called `Boolean` in Ruby, you are very wrong. In Ruby, `true` is an object which is the **ONLY** instance of the class `TrueClass`. Likewise, `false` is an object which is the **ONLY** instance of the class `FalseClass`. 

As for the Falsey values, there is no `undefined` and `null` in Ruby. There is only `nil`.

*Ruby*
```ruby
puts true.class
puts false.class

puts "Positive number is truthy." if 1
puts "Zero is also truthy." if 0
puts "Heck, even negative numer is truthy." if -1

puts "String is truthy." if "hello"
puts "Empty String is... truthy!" if ""

puts "Array with content is truthy" if [1,2,3]
puts "An empty array is also truthy." if []

puts "No kidding, true is true." if true
puts "False is ... false." if false
puts "Nil is also falsey." if nil

puts "You can ask the obvious, Nil is nil." if nil.nil?
puts "No, nil is NOT false" if nil == false
```

### Round 6: Arrays and Blocks

Now this is the part where Ruby really outshines other programming languages.

#### Basics

These are pretty much the same as in JavaScript. Nothing special here. Let's move on.

*Ruby*
```ruby
a = [1,2,3,4,5]

puts a[0]                # 1
puts a[1]                # 2
puts a[4]                # 5
puts a.length            # 5
puts a[a.length - 1]     # 5

a.push 6
p a                      # [1, 2, 3, 4, 5, 6]
a.pop
p a                      # [1, 2, 3, 4, 5]
a.unshift 0
p a                      # [0, 1, 2, 3, 4, 5]
a.shift
p a                      # [1, 2, 3, 4, 5]
```

#### This is where the fun begins

There is no JavaScript equivalent here.

*Ruby*
```ruby
puts a.first             # 1
puts a.last              # 5
puts a.empty?            # false
puts [].empty?           # true

a << 6                   # same as :push
p a                      # [1, 2, 3, 4, 5, 6]
a.delete 6    
p a                      # [1, 2, 3, 4, 5]

puts a.max               # 5
puts a.min               # 1
```

#### Array Iteration

In JavaScript, the following 2 are the most common (only?) ways to iterate an array.

*JavaScript*
```javascript
var a = [1,2,3,4,5];

// The old-fashioned way
for (var i=0; i<a.length; i++) {
  console.log(a[i]);
}

// Yeah what all cool kids are doing nowadays
a.forEach(function(x) {
  console.log(x);
});
```
In Ruby, it is time to go crazy.

*Ruby*
```ruby
a = [1,2,3,4,5]

# There are many ways to iterate an array in Ruby

# This is a way but it is a pretty odd way
a.length.times do |i|
  puts a[i]
end

# Yes there is the for-loop
for num in a do
  puts num
end

# But this is what a true Rubyist will do
a.each do |num|
  puts num
end

# or
a.each { |num| puts num }

# Oh you want to use the index?
a.each_with_index do |num, i|
  puts "Value [#{num}] is located at index [#{i}]"
end
```

#### It is a Block!!

Hey wait, did you notice something interesting in the above examples? What did we pass to the `#each` method of the array? Look at them again:

```ruby
a.each do |num|
  puts num
end

a.each { |num| puts num }
```

What you see here are blocks. 

>
> A *block* is simply a chunk of code enclosed between either braces or the keywords _do_ and _end_.
>

These 2 forms are pretty much identical. However, the current Ruby style seems to favor using braces for blocks that fit one line and _do_/_end_ when a block spans multiple lines. A block is somewhat like the body of an anonymous function and it can take parameters too. You just need to enclose the parameters between `| |`. 

You can **almost** think of a block as something similar to the `callback` function in JavaScript. The code inside the block will not be executed immediately but they will be saved away to be invoked later.

### Round 7: Symbols

>
> A Ruby symbol is an identifier corresponding to a string of characters, often a name. You construct the symbol for a name by preceding the name with a colon, and you can construct the symbol for an arbitary string by preceding a string literal with a colon.
>

There is no JavaScript equivalent here.

#### The many ways of creating symbols

The key takeaway here is that we can construct a symbol out of some String values dynamically.

*Ruby*
```ruby
puts :name.class               # Symbol

p :name                        # :name
p :"Ruby Rocks"                # :"Ruby Rocks"

a = 'iron'
p :'batman'                    # :batman
p :"#{a}man"                   # :ironman
p :'#{a}man'                   # "\#{a}man"
```

#### Symbols vs Strings

In Ruby, everything is an object and each of them has an unique `object_id`. Now, another interesting thing about Symbols is that they are unique. The best way to prove that is to check out their Object_IDs.

*Ruby*
```ruby
a = 'super'

# These 3 will produce different object id
puts "superman".object_id
puts "superman".object_id
puts "#{a}man".object_id

# These 3 will produce the same object id
puts :superman.object_id
puts :superman.object_id
puts "#{a}man".to_sym.object_id
```

The method `to_sym` will covert a string into a symbol. It is part of the family of **Converter Methods** in Ruby for class conversion, such as `to_s`, `to_i` and `to_f`.

### Round 8: Hashes

>
> _Hashes_ (sometimes known as associative arrays, maps or dictionaries) are similar to arrays in that they are indexed collections of object references.
>

While you can only index arrays with integers, you can index a hash with virtually any type of objects: symbols, strings, regular expressions and so on (note: yes you can index a hash with an array too but it is dangerous to do that). Antoher way to look at a hash is that: It is a collection of key-value pairs.

#### Declaration

First let's see how to create a hash as hash litetrals, i.e. a list of key-value pairs between braces. If you are thinking about JavaScript Object Literals right now, you are right.

*Ruby*
```ruby
# Using strings as keys, this is old school
h1 = { 
  'superman' => 'Clark Kent', 
  'batman' => 'Bruce Wayne', 
  'green lantern' => 'Hal Jordan'
}

# Using symbols as keys, this is cool
h2 = {
  :superman => 'Clark Kent',
  :batman => 'Bruce Wayne',
  :'green lantern' => 'Hal Jordan'
}

# Using symbols as keys using the shortcut, hey, does it look like JavaScript?
h3 = {
  superman: 'Clark Kent',
  batman: 'Bruce Wayne',
  'green lantern': 'Hal Jordan'
}

p h1              # {"superman"=>"Clark Kent", "batman"=>"Bruce Wayne", "green lantern"=>"Hal Jordan"}
p h2              # {:superman=>"Clark Kent", :batman=>"Bruce Wayne", :"green lantern"=>"Hal Jordan"}
p h3              # {:superman=>"Clark Kent", :batman=>"Bruce Wayne", :"green lantern"=>"Hal Jordan"}
puts h3.class     # Hash
```

Although `h3` looks pretty much like a JavaScript Object Literal, please note that **IT IS AN INSTANCE OF THE HASH CLASS IN RUBY**.

As a reminder, this is how a Object Literal looks like in JavaScript.

*JavaScript*
```javascript
var h1 = {
  superman: "Clark Kent",
  batman: "Bruce Wayne",
  "green lantern": "Hal Jordan"
};

console.log(h1);  // { superman: 'Clark Kent', batman: 'Bruce Wayne', 'green lantern': 'Hal Jordan' }

console.log(h1["batman"])   // the key is still a string
```

#### Get and Set values

The whole point of using a Hash is to store collection of key-value pairs which means we need to _set_ and _get_ them.

*Ruby*
```ruby
heroes = {
  superman: 'Clark Kent',
  batman: 'Bruce Wayne',
  'green lantern': 'Hal Jordan'
}

puts heroes.length                # 3
puts heroes[:superman]            # Clark Kent
begin
  puts heroes.superman            # Yo, this is NOT JavaScript
rescue
  puts "'heroes.superman' is not allowed in Ruby."
end

heroes[:flash] = "Barry Allen"
p heroes                          # {:superman=>"Clark Kent", :batman=>"Bruce Wayne", :"green lantern"=>"Hal Jordan", :flash=>"Barry Allen"}

heroes[:ironman] = "Tony Stark"   # Adding Iron Man....
p heroes                          # {:superman=>"Clark Kent", :batman=>"Bruce Wayne", :"green lantern"=>"Hal Jordan", :flash=>"Barry Allen", :ironman=>"Tony Stark"}
heroes.delete :ironman            # Oops... Iron Man is not a DC superhero. Remove it.
p heroes                          # {:superman=>"Clark Kent", :batman=>"Bruce Wayne", :"green lantern"=>"Hal Jordan", :flash=>"Barry Allen"}
```

Please note that you can use this notation to access a value in a JavaScript object `heroes.superman` but you **CANNOT** do this in Ruby.

#### Navigate a Hash

Let's take a look at how we can check out every value in a hash.

*Ruby*
```ruby
heroes = {
  superman: 'Clark Kent',
  batman: 'Bruce Wayne',
  'green lantern': 'Hal Jordan'
}

p heroes.keys                       # [:superman, :batman, :"green lantern"]

p heroes.values                     # ["Clark Kent", "Bruce Wayne", "Hal Jordan"]

puts heroes.has_key? :superman      # true
puts heroes.has_key? :robin         # false

# Secret Identities Revealed!!
heroes.each do |hero, alterego|
  puts "#{alterego} is #{hero.capitalize}."
end

# Or you can do this too
heroes.each do |hero|
  puts "#{hero.last} is #{hero.first.capitalize}."
end

# Heck, why not this?
for hero in heroes
  puts "#{hero.last} is #{hero.first.capitalize}."
end
```

## Further Readings:
Language Features and Quick References:
  - [JS Ruby Comparison](http://agentcooper.io/js-ruby-comparison/)
  - [Ruby From Other Languages](http://www.ruby-lang.org/en/documentation/ruby-from-other-languages/)

Books:
  - [Programming Ruby 1.9 & 2.0 (4th Edition)](https://pragprog.com/book/ruby4/programming-ruby-1-9-2-0)
  - [Learn Ruby the Hard Way](http://learnrubythehardway.org/book/) (**FREE Online Book with Videos**)
