require 'pry'

# clown_joke = "Why don't sharks eat clowns? They taste funny."
# clown_names = [ "Bluster", "Flaky", "Raspy", "Floppy", "Krusty", "Baby" ]

# clown1 = { name: "Bluster", age: 40, skill: "juggling", fear: "red noses" }
# clown2 = { name: "Flaky", age: 32, skills: "pie throwing", fears: "children" }
# clown3 = { name: "Raspy", age: 24, skill: "haunting your dreams", fear: "other clowns" }
# clown4 = { name: "Floppy", clown_age: 76, skill: "falling down", fear: "stairs" }
# clown5 = { name: "Krusty", age: 39, skill: "giving a creepy smile", fear: "parties" }
# clown6 = { name: "Baby", age: 19, skills: "eating a lot of food", fear: "birds" }
# clown7 = { name: "Kevin", age: 31, skill: "bad jokes", fear: "peanuts" }
#
# clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]
#
# def say_hi(name, age)
#   puts "Hi! I'm #{name} and I'm #{age} years old."
# end






class Clown
  attr_accessor :name, :age, :skill, :fear

  def initialize(name, age, skill, fear)
    @age = age
    @name = name
    @skill = skill
    @fear = fear
  end

  def say_hi
    "Hi! I'm #{@name} and I'm #{@age} years old."
  end

  def perform
    "I am currently doing #{@skill}..."
  end

  def scare
    "AHHHHHHHHH!!!! Not a #{@fear}!!!"
  end
end






clown1 = Clown.new("Bluster", 40, "juggling", "red noses")
clown2 = Clown.new("Flaky", 32, "pie throwing", "children")
clown3 = Clown.new("Raspy", 24, "haunting your dreams","other clowns")
clown4 = Clown.new("Floppy", 76, "falling down","stairs")
clown5 = Clown.new("Krusty", 39, "giving a creepy smile","parties")
clown6 = Clown.new("Baby", 19, "eating a lot of food","birds")

clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]



# give me a list of names of the clowns over 30 years old
older_clowns = clowns.select { |clown| clown.age > 30 }

older_clown_names = older_clowns.map do |clown|
  clown.name
end






# attr_reader :name, :age, :skill
# attr_writer :name, :age, :skill



  # getter / reader
  # def name
  #   @name
  # end
  # setter / writer
  # def name=(name_arg)
  #   @name = name_arg
  # end

  # getter / reader
  # def age
  #   @age
  # end
  # setter / writer
  # def age=(age_arg)
  #   @age = age_arg
  # end

  # getter / reader
  # def skill
  #   @skill
  # end
  # setter / writer
  # def skill=(skill_arg)
  #   @skill = skill_arg
  # end















binding.pry

0
