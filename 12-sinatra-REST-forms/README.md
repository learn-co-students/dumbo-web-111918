# SWBAT
* Explain REST (Representational State Transfer)
  Convention for URLs that make it easier to read
  Framework and rules (Separation of Concern)

* Demonstrate how REST is used with CRUD
  Create

  Read

  Update

  Delete
* Build out CRUD using Sinatra

# RESTful CRUD
* Reading ✅  - GET /students (index page) & GET /students/:id (show page)
* New ✅ - GET /students/new (gets.chomp)
* Creating ✅  - POST /students
  * Form ✅
  * Mass assignment ✅❓ - params
* Edit form
  * Nested params
* Updating
  * One small caveat (`"_method"`?)
* Deleting

## If we have time
* Refactoring
  * helper methods
  * partials
