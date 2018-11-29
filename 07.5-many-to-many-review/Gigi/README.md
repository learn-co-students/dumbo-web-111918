# Bikini Bottom's Boating School App
*Special thanks to [Melaine MacDonald](https://github.com/mmacdonald1) for an amazing project*

Welcome to Boating School! This project is meant to help out Bikini Bottom citizens
take their boating test to get a license! There are three models, `Student`,
`Instructor`, and `BoatingTest`.

## Domain Modeling
- An `Instructor` has many `BoatingTests`
- A `Student` has many `BoatingTests`
- A `BoatingTest` belongs to a `Student` and an Instructor

As a kind reminder, try drawing out the relationship before attempting to write code.
This will help you think about which models should own what data and which models
should ask for information from other models.

### `Student` class
A `Student` should initialize with a `first_name` and `last_name`

- `Student.all`
  - Returns all of the student instances
- `Student.full_names`
  - Returns an array of all students' full names
- `Student#add_boating_test(instructor, test_name, test_status)`
  - Should initialize a new `BoatingTest` with a `Student` object, a boating test
  name (`String`), a boating test status (`String`), and an `Instructor` object
- `Student.find_student(full_name)`
  - Takes in a full name as a string and returns back that `Student` object

### `BoatingTest` class
A `BoatingTest` should initialize with a `Student` object, a boating test name
(`String`), a boating test status (`String`), and an `Instructor` object

- `BoatingTest.all`
  - Returns an array of all boating test instances

### `Instructor` class
An `Instructor` should initialize with a `name` as a string.

- `Instructor.all`
  - Returns an array of all instructor instances
- `Instructor#fail_student(student_name, test_name)`
  - Changes a test's status to being `failed`
- `Instructor#pass_student(student_name, test_name)`
  - Changes a test's status to being `passed`
- `Instructor#boating_tests`
  - Shows all boating tests that this instructor is conducting
