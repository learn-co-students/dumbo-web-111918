# PART 1
- What is a DOM event?
- What kinds of DOM events are there?
- How can I use callbacks to do something when a DOM event occurs?
- What is the DOMContentLoaded event?
- What gets passed in to an event handler by addEventListener?
- Why don't setting innerHTML and event handlers mix well? What's a better way of adding a new element to the DOM?

# PART 2
- When do inline anonymous functions present a risk to JS performance?
- What are my options when I need to bind an event handler to something that isn't in the DOM yet?
- What is event bubbling and why is it useful and necessary? What is the difference between .stopPropagation and .preventDefault?
- What is delegation? What does delegation have to do with event bubbling?
- What is a stable parent, and what role does it play in delegation?

## Handy links
- Event handlers: https://codepen.io/telegram/pen/PJpPGm
- Event bubbling: https://codepen.io/telegram/pen/maJxVV

## Delegation: a love story
1. Find a stable parent (element that will always be on the DOM)
2. Bind an event listener to that stable parent
3. In the event listener, figure out if you clicked on a child of the type you're after
4. Do the thing (or not, if it's the wrong type of child)
