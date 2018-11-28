
What is SQL stand for?
- Structured Query Language


What is SQL for?
- manipulate databases?
  - ex. Add data, delete data, view data,
- interact with databases (manipulate + query)
- do CRUD??

What is persistence?
- saves forever (or some period of time??)
- doesn't go away
- stored in hard drive vs ram
- return to it later

Why save stuff somewhere?
- for storage
- to be able to reference it
- you can access it from anywhere using the internet?



What kinds of operations are there in SQL?
- Create tables
- Drop (delete) tables
- Edit tables
- Alter tables

- SELECT rows

CRUD

Create
- INSERT a row

Read
- SELECT a row or rows
- COUNT, ADD, SUM, AVG

Update
- ALTER table
- UPDATE

Destroy
- DROP table
- DELETE (row(s) in a table)










# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name = "Black Sabbath";
SELECT * FROM artists WHERE name LIKE "Black Sabbath";
-- SELECT * FROM artists WHERE name LIKE "Black%";
```

3. Write the SQL to create a table named 'fans' with an auto incrementing ID that's a primary key and a name field of type text


```sql
CREATE TABLE pizzas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  -- size TEXT CHECK(size = "small" or size = "medium" or size = "large")
);
```
INSERT INTO pizzas (name) VALUES ("cheese");
DELETE FROM pizzas WHERE id = 1;


4. Write the SQL to alter the fans table to have a artist_id column type integer?


```sql
ALTER TABLE fans ADD COLUMN artist_id TEXT;
ALTER TABLE fans ADD COLUMN favorite_icecream TEXT;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**


```sql
INSERT INTO fans ( name, artist_id, age, favorite_icecream ) VALUES ( "Julissa", 169, 70, "Chocolate");
```

6. UPDATE OUR OTHER fans to have favorite_icecream

```sql
UPDATE fans
SET favorite_icecream = "Strawberry";
WHERE name = "Bob";
```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id != 169;
```

8. Write the SQL to display all artists names next to their album title
artist_name   | album_title
-------------------------
black sabbath | album 1
black sabbath | album 2
black sabbath | album 3


```sql
SELECT artists.Name, albums.Title
FROM albums JOIN artists ON albums.ArtistId = artists.ArtistId
WHERE artists.Name LIKE "Black%";
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql
SELECT
  artists.name as "artist name",
  albums.title as "album title",
  COUNT(tracks.Name) as "track count",
FROM albums
JOIN artists ON artists.ArtistId = albums.ArtistId
JOIN tracks ON tracks.AlbumId = albums.AlbumId
GROUP BY albums.Title;
```


10. DESTROY Our user....

```sql
DELETE FROM fans WHERE name = "Bob";
```
