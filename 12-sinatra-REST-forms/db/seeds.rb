students = ["Albina Zakirova", "Ana Arias-Gonzalez", "Gracie McGuire", "Jarrian McLean", "Jerold Kim", "Jesus Escalona", "Joel Rivera", "John Mark Redding", "Jonathan Biro", "Joseph Lorenzo", "Julissa Lema", "Kiyana Dunlock", "Mariel Wastervelt", "Patricio Carrasco", "Roman Pirag", "Samuel Prada", "Stephen Argentina", "Susan Isserman", "Taimur Shah", "Thompson Plyler"]

students.each do |student_name|
  Student.create(
    name: student_name,
    age: rand(18),
    favorite_food: Faker::Food.dish,
    pokemon: Faker::Pokemon.name
  )
end
