require 'pry'

# clown_joke = "Why don't sharks eat clowns? They taste funny."
# clown_names = [ "Bluster", "Flaky", "Raspy", "Floppy", "Krusty", "Baby" ]

# clown1 = { name: "Bluster", age: 40, skill: "juggling", fear: "red noses" }
# clown2 = { name: "Flaky", age: 32, skills: "pie throwing", fears: "children" }
# clown3 = { name: "Raspy", age: 24, skill: "haunting your dreams", fear: "other clowns" }
# clown4 = { name: "Floppy", clown_age: 76, skill: "falling down", fear: "stairs" }
# clown5 = { name: "Krusty", age: 39, skill: "giving a creepy smile", fear: "parties" }
# clown6 = { name: "Baby", age: 19, skills: "eating a lot of food", fear: "birds" }
#
# clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]
#
# def say_hi(name, age)
# 	"Hi! My name is #{name}, and I am #{age} years old!"
# end
#
# def perform(skill)
# 	"I am now #{skill}!"
# end
#
# def tell_secret(fear)
# 	"I am terrified of #{fear}..."
# end

class Clown
  attr_accessor :name, :skill, :fear
  attr_reader :age

  def initialize(name, age, skill, fear)
    @name = name
    @age = age
    @skill = skill
    @fear = fear
  end

  def say_hi
    "Hi! My name is #{@name}, and I am #{@age} years old!"
  end

  def perform
    "I am now #{@skill}!"
  end

  def tell_secret
    "Shhh... Don't tell anyone but I'm terrified of #{@fear}..."
  end

end

clown1 = Clown.new("Bluster", 40, "juggling", "red noses")
clown2 = Clown.new("Flaky", 32, "pie throwing", "children")
clown3 = Clown.new("Raspy", 24, "haunting your dreams","other clowns")
clown4 = Clown.new("Floppy", 76, "falling down","stairs")
clown5 = Clown.new("Krusty", 39, "giving a creepy smile","parties")
clown6 = Clown.new("Baby", 19, "eating a lot of food","birds")

clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]



# all clowns say hi!
clowns.each do |clown|
  puts clown.say_hi
end

# find all clowns older than 30
old_clowns = clowns.select do |clown|
  clown.age > 30
end

# have old_clowns (all clowns older than 30) tell us a seceret
old_clowns.each do |clown|
  clown.tell_secret
end

# and return an array of thier names
old_clown_names = old_clowns.map do |clown|
  clown.name
end

clowns.select do |clown|
  clown.age > 30
end.map do |clown|
  clown.name
end

binding.pry
