# The Browser (DOM, BOM)
* DOM (Document Object Model)
  * A tree structure starting at the document
  * Every element is a node in the tree
  * Every element is related in this structure to every other element
  * We can find elements by traversing the DOM
  * Each element has a parent (except one) and children (maybe)
  * Elements have properties that can be manipulated
  * `window` object
  * `document` object
* Element interfaces
  * Different elements (`table`, `p`, `image`) support different methods
  * You have to look up the element (in documentation or in prototype chain) to know what properties are accessible to change and methods available to call
* BOM (Browser Object Model)
  * The things that we can access about the browser in our code
  * Examples
    * `console` object
    * `navigator` object
    * `location` object
    * `history` object
    * `localStorage` object
    * timers
  * Everything that is not part of the document!
* DOM and BOM APIs
  * The code that is available to us to manipulate the DOM and the BOM
* How to add things to the DOM
  * Nodes vs innerHTML
  * append
  * appendChild
* Templating
  * We used to use ERB
  * Now we'll write templates for dynamically updating our web page without refreshing
