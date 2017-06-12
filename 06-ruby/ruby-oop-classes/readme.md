## OOP in Ruby

### Intro
- Everything in Ruby is an object
  - that means that everything has attributes and methods contained inside it
  - even the data types you're used to are objects, and we're gonna mess 'em up today to prove it
  - literally everything "inherits" from the Object Class, which just like the real life gene pool, means it gets all it's parents traits

### Classes
- [Ruby Doc](http://ruby-doc.org/core-2.2.0/Class.html)

##### Definition

```ruby
# this defines the class (just like object constructor in javascript)
class MyClass
end

# this instantiates a new instance of Class
obj = MyClass.new
```

- Nice, that's called instantiates(initializing) a new instance. This is the same concept as object constructors in JS. Basically a blueprint were we can follow and create a new object
- For example, you'd consider the chair you're in now a single instance of a chair - it was created using Chair blueprint.

### Attributes VS Methods
- An attribute is a variable that describes the current state of the object
- A method is an "executable function"(in javascript sense) that runs certain logic

```ruby
class MyClass
  def initialize(name)
    @name = name
  end

  def introduce
    puts "My name is #{@name}"
  end
end

# obj = MyClass.new("Denis")
# obj.@name # this doesn't work because @name is an attribute not a method
# obj.introduce # this works because introduce is a method we defined
```

##### Default Attribute value
- The following is a way to specify a default value for a variable if the user did not specify when calling the method

```ruby
class MyClass
  def initialize(name="James Bond")
    @name = name
  end

  def introduce
    puts "My name is #{@name}"
  end
end

obj = MyClass.new
obj.introduce
```

##### Attribute Methods (Getter / Setter)
- [Ruby Doc](http://ruby-doc.org/core-2.0.0/Module.html#method-i-attr_accessor)

Now you might ask how do we "access" the instance variable?

The answer is through `attr_reader` & `attr_writer` & `attr_accessor`

This is also called "getters" and "setters"

```ruby
class MyClass

  def initialize(name="James Bond")
    @name = name
  end

  def name        # attr_reader
    @name
  end

  def name=(val)  # attr_writer
    @name = val
  end
end

# You will now have access to @size variable as as a method
# denis = MyClass.new("Denis")
# puts denis.name
# denis.size = "James Bond"
# puts denis.name
```

Another of writing is as follow

```ruby
class MyClass

  attr_accessor :name

  def initialize(name="James Bond")
    @name = name
  end
end
```

### Instance VS Class Attributes
- Instance variable is "unique" to each instance
- Class variables is "unique" to all instance of that class
  - this means that if you change a class variable in one instance, other instances of the same class will also change

##### Instance Attributes (@)

```ruby
class MyClass
  def initialize(value)
    @foo = value
  end
end

obj = MyClass.new("hi there")
```

##### Class Attributes (@@)

```ruby
class MyClass
  def initialize(value)
    @@foo = value
  end

  def foo
    @@foo
  end
end

obj1 = MyClass.new("hi there")
obj1.foo
obj2 = MyClass.new("how are you")
obj2.foo
obj1.foo
```

```ruby
class MyClass
  @@value = 1
  def add_one
    @@value= @@value + 1
  end

  def value
    @@value
  end
end
instanceOne = MyClass.new
instanceTwo = MyClass.new
puts instanceOne.value
instanceOne.add_one
puts instanceOne.value
puts instanceTwo.value
```

### Instance vs Class Methods
- Instance methods are methods you can run on an "Instance" of a class but not on the actual class
- Class methods are methods you can run on a "Class" but not an instance of a class

##### Instance methods

```ruby
class MyClass
  def some_method
    puts 'something'
  end
end
instance = MyClass.new
instance.some_method
```

##### Class methods

```ruby
class MyClass
  def self.some_method
    puts 'something'
  end
end
MyClass.some_method
```

### Inheritance

##### Defining subclasses

```ruby
class ParentClass
  def a_method
    puts 'b'
  end
end

class SomeClass < ParentClass
  def another_method
    puts 'a'
  end
end

father = ParentClass.new
father.a_method

child = SomeClass.new
child.another_method
child.a_method
```

##### Super

```ruby
class ParentClass
  def a_method
    puts 'b'
  end
end

class SomeClass < ParentClass
  def a_method
    super
    puts 'a'
  end
end

instance = SomeClass.new
instance.a_method
```

### Method Visibility

##### Public (default)

- A public type attribute or method can be accessed from anywhere.

##### Protected

- May be called by any instance of the defining class or its subclasses

##### Private

- May be called only within the context of the calling object. It is never possible to access another object instance's private methods directly, even if the object is of the same class as the caller

Example:

```ruby
require 'method_locator'
require 'pry'

class Person
  def public_m
    puts "this is a public function"
  end

protected
  def protected_m
    puts "this is protected function"
  end

private
  def private_m
    puts "this is private function"
  end
end

class Student < Person
  def test
    begin
      # explanation
      # self returns this object as a variable
      # you can access another object's protected function is they are in the same family
      # result = you can call self.protected_m
      self.protected_m
      puts "protected works"
    rescue
      puts "protected doesn't work"
    end

    begin
      # explanation
      # self returns this object as a variable
      # you cannot access another object's (variable) private function
      # result = you cannot call self.private_m
      self.private_m
      puts "private works"
    rescue
      puts "private doesn't work"
    end
  end

  def test2
    # explanation
    # both protected and private can be call from WITHIN the instance
    # result = both can be called
    protected_m
    private_m
  end
end

s = Student.new
s.test
s.test2

# you can check out the owner of methods here
# Student.new.methods_for(:private_m).each do |method|
#   puts method.owner
# end
```

### Independent Practice (15 minutes)

We're gonna try a little memory exercise. Take 1 minute and make sure what we've done so far is stuck in your memory. Remember the important pieces - we're about to close our computers.

Now, with a marker on the desk, and only from memory, write out a class that defines a student in this room. Think of it first as a blueprint, and then as the actual person. Pick at least one attribute, write a getter & a setter on your desk. Then write out how you'd get & set that attribute beneath it.

When you're done, open up your computer, run it in IRB, and test whether your memory got it all right.

### Resources

- [Wikipedia](http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)
