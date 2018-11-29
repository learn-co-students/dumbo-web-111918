require_relative '../config/environment'

# Declare your variables here~~~

joseph = Student.new('Joseph', 'Lorenzo')
mariel = Student.new('Mariel', 'Westervelt')

joel = Instructor.new('Mr. Rivera')
taimur = Instructor.new('Sir Taimur')


test1 = BoatingTest.new(joseph, "Joe's Test", 'pending', joel)
test2 = BoatingTest.new(joseph, "Joe's Test", 'pending', taimur)

# don't remove!
binding.pry
0
