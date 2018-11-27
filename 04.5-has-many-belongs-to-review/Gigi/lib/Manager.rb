class Manager
  attr_accessor :age, :department, :name
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
    # self.employees
  end

  def self.all_departments
    @@all.map do |manager|
       manager.department
    end.uniq
     # all_departments = @@all.map { |manager| manager.department }
     # unique_departments = all_departments.uniq
     # unique_departments
  end

end
