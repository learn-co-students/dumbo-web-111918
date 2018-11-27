require_relative "lib/Manager"
require_relative "lib/Employee"
require 'pry'


#Test your code here
julissa = Manager.new("Julissa", "Flatiron", 50)
roman = Manager.new("Roman", "Roman Empire", 51)

eric = Employee.new("Eric", 10000, roman)
joe = Employee.new("Joe", 10500, roman)
julissa.hire_employee("Kiyana", 12000)
johnmark = Employee.new("John Mark", 10500, julissa)
binding.pry
puts "done"
