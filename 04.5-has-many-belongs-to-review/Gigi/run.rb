require_relative "lib/Manager"
require_relative "lib/Employee"
require 'pry'


#Test your code here
may = Manager.new("May", "Access Labs", 27)
brandon = Manager.new("Brandon", "Flatiron Battery Park", 290230912)

eric = Employee.new('Eric', 100000, may)

kevin = Employee.new('KevyWevy', 50, may)

graham = Employee.new('Graham', 200000, brandon)

binding.pry
puts "done"
