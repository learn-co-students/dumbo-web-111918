class Manager
  attr_accessor :name, :department, :age
  @@all = []

  def initialize(name, department, age)
    @name = name
    @department = department
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  def employees
    Employee.all.select do |employee|
      employee.manager == self
    end
  end

  def hire_employee(name, salary)
    Employee.new(name, salary, self)
  end

  def self.all_departments
    @@all.map do |manager|
      #body of the .map tells us how to transform the elements of the array
      manager.department
    end
  end

  def self.average_age
    ages = all.map do |manager|
      manager.age
    end
    ages.reduce(:+).to_f/ages.count
  end

end
