# The Office

In this project, you will get the chance to practice object relationships in Ruby, with a particular emphasis on the `has_many/belongs_to` relationship. Make sure you read the entire README and map out your domain models before writing any code!

## Introduction
Welcome to your first day at the Flatiron Mifflin Paper Company. As the Assistant to the Regional Manager, your job is to implement the new Office Management System for both the employees and their managers. Since Michael (your boss) has personally tasked you with this job, you can't disappoint.

---
## Setup (Code)
Your goal is to build out all of the methods listed in the deliverables. Do your best to follow Ruby best practices. For example, use higher-level array methods such as `map`, `select`, and `find` when appropriate in place of each

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby run.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

There are **no** tests! You will need to test your code on your own!

---
## Domain Modeling
First step to this problem is to consider your domain. At Flatiron Mifflin, an `Employee` can only work in one department and a `Manager` oversees only one department. There are often many `Employee`s working for one `Manager` because if there are two `Managers` to "microgement" one employee, the employee might become "aggressive", "hostile" or "difficult."

Here are some questions to consider:
- What are your models?
- What does your domain look like?
- What are the relationships between your models?

---
## Deliverables

**`Manager`**
  * `Manager#name`
    * returns a `String` that is the manager's name
  * `Manager#department`
    * returns a `String` that is the department that the manager oversees
  * `Manager#age`
    * returns a `Fixnum` that is the age of the manager
  * `Manager#employees`
    * returns an `Array` of all the employees that the manager oversees
  * `Manager.all`
    * returns an `Array` of all the managers
  * `Manager#hire_employee`
    * takes a `String` argument and a `Fixnum` argument of an employee's name and the employee's salary, respectively, and adds that employee to the list of employees that the manager oversees
  * `Manager.all_departments`
    * returns an `Array` of all the department names that every manager oversees
  * `Manager.average_age`
    * returns a `Float` that is the average age of all the managers

**`Employee`**
  * `Employee#name`
    * returns a `String` that is the employee's name
  * `Employee#salary`
    * returns a `Fixnum` that is the employee's salary
  * `Employee#manager_name`
    * returns a `String` that is the name of their manager
  * `Employee.all`
    * returns an `Array` of all the employees
  * `Employee.paid_over`
    * takes a `Fixnum` argument and returns an `Array` of all the employees whose salaries are over that amount
  * `Employee.find_by_department`
    * takes a `String` argument that is the name of a department and returns the first employee whose manager is working in that department
  * `Employee#tax_bracket`
    * returns an `Array` of all the employees whose salaries are within $1000 (± 1000) of the employee's who invoked the method
