## Run (we'll talk more about this) in your terminal: 
json-server db.json

## If that ^ doesn't work:
npm install -g json-server

## Finally:
OPEN index.html to see the app.

# For all of these features:
- List movies
  - Event: DOMContentLoaded
  - GET /movies
  - each over the movies = [] and slap a buncha li's on the ul
- Show movie
  - Event: click movie li (delegation???)
  - GET /movies/5
  - slap movie details on the detail pane, each through the cast
- New movie form
  - Event: click add movie button
  - null
  - Put the empty form on the DOM
- Creating movie
  - Event: submit event on the form
  - POST /movies
  - Show the movie we just created in the detail
- Edit movie form
  - Event: click the edit button
  - null
  - Show the edit form
- Updating a movie
  - Event: submit the edit form
  - PATCH /movies/5
  - Show the updated movie
- Deleting a movie
  - Event: click the red button
  - DELETE /movies/5
  - Remove movie from detail + from list (either re-do entire list or .remove() just the right one)

# Describe X, Y, and Z:
- When X happens
- Make Y fetch
- Slap Z on (off) the DOM

# Key To-Do's
- Postman
- json-server
- Dataset
- Optimistic vs. pessimistic rendering
