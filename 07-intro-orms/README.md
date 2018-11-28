# Intro to ORMs (Object Relational Mappers)

## Objectives

* Define Object Relational Mapper \(ORM\)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain the Active Record Pattern
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions using Ruby


```
books
id   |  title                           
-------------------------------------
1      "POODR"                               
2      "The book of :)"                       
3      "I'm amazing"                          
4      "collab book of amazing code"   


book = Book.all[0]

book.id => 1
book.title => "POODR"










books_authors
id |  author_id | book_id
--------------------------
1        1           1
2        2           3
3        2           2
4        1           4
5        2           4

authors
id    |    name
-----------------
1         "Sandi Metz"
2         "Julissa"
```


### CRUD relationships sql vs ruby

## Create
- `INSERT INTO book (title) VALUES ("POODR 2");`
- `book = Book.new("POODR 2")`
- `book.save`
- `Book.create("POODR 2")`

## Read
- `SELECT * FROM books;`
- `Book.all`

- `SELECT * FROM books WHERE id = 1;`
- `Book.find(1)`
- `Book.find_by_id(1)`

- `SELECT * FROM books WHERE title = "POODR";`
- `Book.find_by_title("POODR")`

## Update
- `UPDATE books SET (title) VALUES ("I'm REALLY amazing!") WHERE id = 3;`
- `book = Book.find(3)`
- `book.update_title("I'm REALLY amazing!")`

## Destroy
- `DELETE books WHERE id = 3;`
- `book = Book.find(3)`
- `book.destroy`
