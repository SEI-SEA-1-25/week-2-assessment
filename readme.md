# Week 2 Assessment - NAME: ____________ `__/20` 

Put your answers in the provided `answers.txt`

## Conceptual
___
```js
let color = 'yellow';

let crimeFighters = {
  turtles: ["Leonardo", "Raphael", "Michelangelo", "Donatello"],
  rangers: {
    red: "Jason",
    black: "Zack",
    yellow: "Trini",
    blue: "Billy",
    pink: "Kimberly",
    green: "Tommy"
  }
};

if (crimeFighters.rangers.red === 'Jason') crimeFighters.rangers.blue = 'Bob';
```
#### Assuming the above code has been run:

##### 1. What does the expression `crimeFighters.turtles[3]` return?
<br>

##### 2. What does the expression `crimeFighters.rangers[color]` return?
<br>

##### 3. What does the expression `crimeFighters.rangers.blue` return?

```js
let b = "cat";
let a = "dog";
a = b;
a === "duck"
```

#### Assuming the above code has ran:

##### 4. What is the value of `a`?
<br>

```js
const myFunc = function() {
  "hello world";
};
console.log(myFunc)
```

##### 5. The student that wrote the code above expected "hello world" to log in the console. Explain what change(s) are needed to make the code work as expected - without `console.log` being added within the `myFunc` function?
<br><br><br>

```js
let stuff = [
  ['one', 2, false],  {apples: 12, fn: function() { return this.apples; }},   false]; 
    
    
    
    let a = 2;
```
#### Assuming the above code has ran:

##### 6. What does the expression `stuff[a]` evaluate to?
<br>

##### 7. What does the expression `stuff[0][a]` evaluate to?
<br>

##### 8. What does the expression `stuff[0][1]` evaluate to?
<br>

##### 9. What does the expression `stuff[1].fn()` return?

## Mechanical 
___

### Array Iteration

##### 1. Declare a variable named `turtles` and assign an array containing the strings "Donatello", "Leonardo", "Michelangelo", and "Raphael":
<br><br>
 
##### 2. Write a `forEach` loop to `console.log` each name in _turtles_, appending the string " likes pizza" to each name:
<br><br>

### Classes

```js
  class Turtle {
      constructor(name, maskColor) {
      		// Question 3 answer below

        this.name = name
        this.maskColor = maskColor

      }
      // add the sayName method below (Question 4)
    
    sayName () {

      return console.log("I am " this.name)
    }
    
  }
  
  // Create a new Turtle object below (Question 5)
  
  let Leo = new Turtle ("Leonardo", "Blue");

    return this.name
    return this.maskColor
  
```
#### Complete the following code inside of the `Turtle` class above:

##### 3. Such that new turtle objects created will have their `name` and `maskColor` properties assigned.
##### 4. Add a `sayName` method that console.logs “I am " and appending the turtle's `name`.

##### 5. Write the line of code above that uses the `Turtle` class above to create a turtle object with a `name` of "Leonardo" and a `maskColor` of "blue"; and assign the new object to a variable named `leo`.
 
### Objects

```js
let car = {make: 'Toyota', year: 2017, model: 'Prius'};
```

##### 6. Write a JS expression (just the expression, don't assign to a variable) that **accesses** the value of the `car` object's `model` property using **dot notation**:<br><br>

##### 7. Write a JS expression that **accesses** the value of the `car` object's `year` property using **square bracket notation**:<br><br>

##### 8. Define an object literal and assign to a variable named `account`. Within the object literal, include an `accountNo` property that holds a string of your choosing and a `balance` property that holds a number of your choosing. Finally, include a method (property that holds a function) named `print` within the object literal that would console.log a string formatted as<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Account No: AAAAAA / Balance: BBBBB**<br>substituting the values of `accountNo` and `balance` for AAAAAA and BBBBB:<br><br><br><br><br><br>

### Functions and Callbacks

##### 9. Write a function named `add` that has two parameters and RETURNS the sum of those two parameters:
<br><br>

##### 10. Write a function named `calculate` that accepts three arguments: two numbers and a callback function.  Code the `calculate` function such that it will RETURN the result returned from invoking the callback function with the two numbers as arguments:
<br><br><br>

##### 11. Invoke the `calculate` function (defined in question #10 above), passing to it these arguments: 20, 15, and the `add` function (defined in question #9 above):
<br><br>
