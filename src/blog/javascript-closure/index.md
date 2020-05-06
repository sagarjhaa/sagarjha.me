---
title: "What is Javascript closure?"
date: "2020-05-05"
---

I have been asked this question many times and have learned
about it more times than i can think.

Lets see what I have learned from various sources about the concept of closures.

```javascript{numberLines:false}
function outer() {
  var name = "World"
  function inner() {
    // access to the name variable is the facilitated
    // by closure.
    console.log(`Hello ${name}`)
  }
  inner()
}

outer() // Hello World
```

In the above code there is no _**name**_ variable declared inside the **inner** function block.
It can still access the variable. Why is that?

Accessing the _**name**_ variable is done via lexical scoping. Dont sweat on the word lexical.
Nested functions have access to variables declared in their outer scope. **That is closure.**

```javascript{numberLines:false}
function userName() {
  --------------------Lexical scope-----------------
  |  var name = "World"                            |
  | function printName() {                         |
  |    console.log(`user name is ${name}`)         |
  |  }                                             |
  |  printName()                                   |
  --------------------Lexical scope-----------------
}

userName() // user name is World
```

Get your hands on the closure. [Try it yourself](https://jsbin.com/nitiyiy/edit?js,console)

## How can you use it? or What is the use for it?

Lets say you want to write a function that add 2 to a given integer argument.
Simple enough!

```javascript
function add2To(number) {
  console.log(2 + number)
}
```

Then we have requirement to create a function that can add 5 to a given integer argument.
Now that is just same code over and over again. Lets see how closure can make it interesting.

```javascript
function addXToY(x) {
  // x is the number you want to set 2,5 or any other
  function sum(y) {
    // y is the second number that needs to be added
    // to x.
    console.log(x + y)
  }
  return sum
}

var add2 = addXToY(2)
add2(10) // output on console = 12

var add5 = addXToY(5)
add5(10) // output on console = 15
```

I hope the accessing of the outer variables which are stored in some lexical scope for nested
function to use is clear enough and that is closure.
