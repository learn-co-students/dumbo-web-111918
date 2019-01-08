# Key questions about callbacks
* What does it mean that JS has first-class functions?
* What is the difference between executing and referencing a function?
* What is a callback, and what are callbacks used for? How can I use callbacks in my code?
* What is an anonymous function and why would I want to use one? Is it the same thing as a callback?
* How do iterators work in JS? How are callbacks used with iterators?

# Catch-up
* What is the difference between primitives and non-primitives when it comes to pass-by-reference vs. pass-by-value?
* What is the difference between = and == and === (!= and !==)

# Key questions about scope
* What are the differences between global, functional, and block scope
* What are the similarities and differences between var, let, and const
* What is a closure? What does a closure have to do with callbacks and scope? 

## Additional key questions
* switch - why vs if/else
* filter and/or map
  * reduce
* What is an IIFE and why would I want to use one?








# Callbacks
* Function Composition
  * Using the return values of functions as arguments to other functions
    next(thank("u"))
  * Passing a function as a callback to another function
    thank("u", next)
- Why
  * doing something more than once
  * using the return value of the callback
  * doing something later
  * doing something on the reg bay





# Scope
* Global scope
* Function scope and var
  * reassigning
* Block scope
  * let
    * re-declaring
  * const
    * re-assigning





 (global)
* Can access them ANYWHERE
var
* function scope ("leaks" out of blocks)
* re-declare in the same scope with no error :(
let
* block scope
* can reassign
* get an error if you try to re-declare in the same scope
const
* block scope
* can NOT reassign
* get an error if you try to re-declare in the same scope
