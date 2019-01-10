# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pixel.destroy_all
Picture.destroy_all

pic = Picture.create

Pixel.create(picture: pic, y: 100, x: 500, color: "yellow")
Pixel.create(picture: pic, y: 200, x: 400, color: "red")
Pixel.create(picture: pic, y: 300, x: 300, color: "blue")
Pixel.create(picture: pic, y: 400, x: 200, color: "orange")
Pixel.create(picture: pic, y: 500, x: 100, color: "purple")


pic2 = Picture.create

Pixel.create(picture: pic2, y: 0, x: 200, color: "yellow")
Pixel.create(picture: pic2, y: 0, x: 300, color: "yellow")
Pixel.create(picture: pic2, y: 0, x: 400, color: "yellow")

Pixel.create(picture: pic2, y: 100, x: 100, color: "yellow")
Pixel.create(picture: pic2, y: 100, x: 200, color: "purple")
Pixel.create(picture: pic2, y: 100, x: 300, color: "yellow")
Pixel.create(picture: pic2, y: 100, x: 400, color: "purple")
Pixel.create(picture: pic2, y: 100, x: 500, color: "yellow")

Pixel.create(picture: pic2, y: 200, x: 0,   color: "yellow")
Pixel.create(picture: pic2, y: 200, x: 100, color: "yellow")
Pixel.create(picture: pic2, y: 200, x: 200, color: "purple")
Pixel.create(picture: pic2, y: 200, x: 300, color: "yellow")
Pixel.create(picture: pic2, y: 200, x: 400, color: "purple")
Pixel.create(picture: pic2, y: 200, x: 500, color: "yellow")
Pixel.create(picture: pic2, y: 200, x: 600, color: "yellow")

Pixel.create(picture: pic2, y: 300, x: 0,   color: "yellow")
Pixel.create(picture: pic2, y: 300, x: 100, color: "yellow")
Pixel.create(picture: pic2, y: 300, x: 200, color: "yellow")
Pixel.create(picture: pic2, y: 300, x: 300, color: "yellow")
Pixel.create(picture: pic2, y: 300, x: 400, color: "yellow")
Pixel.create(picture: pic2, y: 300, x: 500, color: "yellow")
Pixel.create(picture: pic2, y: 300, x: 600, color: "yellow")

Pixel.create(picture: pic2, y: 400, x: 0,   color: "yellow")
Pixel.create(picture: pic2, y: 400, x: 100, color: "purple")
Pixel.create(picture: pic2, y: 400, x: 200, color: "yellow")
Pixel.create(picture: pic2, y: 400, x: 300, color: "yellow")
Pixel.create(picture: pic2, y: 400, x: 400, color: "yellow")
Pixel.create(picture: pic2, y: 400, x: 500, color: "purple")
Pixel.create(picture: pic2, y: 400, x: 600, color: "yellow")

Pixel.create(picture: pic2, y: 500, x: 100, color: "yellow")
Pixel.create(picture: pic2, y: 500, x: 200, color: "purple")
Pixel.create(picture: pic2, y: 500, x: 300, color: "purple")
Pixel.create(picture: pic2, y: 500, x: 400, color: "purple")
Pixel.create(picture: pic2, y: 500, x: 500, color: "yellow")

Pixel.create(picture: pic2, y: 600, x: 200, color: "yellow")
Pixel.create(picture: pic2, y: 600, x: 300, color: "yellow")
Pixel.create(picture: pic2, y: 600, x: 400, color: "yellow")

colors = ["yellow", "purple", "skyblue", "orange"]

pic3 = Picture.create

(0..6).each do |x|
  (0..6).each do |y|
    Pixel.create(picture: pic3, y: y * 100, x: x * 100, color: colors.sample)
  end
end

pic4 = Picture.create

(0..6).each do |x|
  (0..6).each do |y|
    chunks = ["FF", "00"]  
    chunks << sprintf("%02X", rand(0...255))
    Pixel.create(picture: pic4, y: y * 100, x: x * 100, color: "#" + chunks.shuffle.join(""))
  end
end



