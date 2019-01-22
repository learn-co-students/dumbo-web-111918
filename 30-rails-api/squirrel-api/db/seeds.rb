# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Acorn.destroy_all
Squirrel.destroy_all

bart = Squirrel.create(name: "Bartholomew")
muriel = Squirrel.create(name: "Muriel")
denton = Squirrel.create(name: "Denton")



Acorn.create(crunchiness: 5, squirrel: muriel)
Acorn.create(crunchiness: 10, squirrel: muriel)
Acorn.create(crunchiness: 5, squirrel: muriel)
Acorn.create(crunchiness: 1, squirrel: muriel)
Acorn.create(crunchiness: 5, squirrel: muriel)
Acorn.create(crunchiness: 3, squirrel: muriel)
Acorn.create(crunchiness: 5, squirrel: muriel)
Acorn.create(crunchiness: 10, squirrel: bart)
Acorn.create(crunchiness: 10, squirrel: bart)
Acorn.create(crunchiness: 5, squirrel: denton)
Acorn.create(crunchiness: 5, squirrel: denton)
Acorn.create(crunchiness: 1, squirrel: denton)
Acorn.create(crunchiness: 1, squirrel: denton)

