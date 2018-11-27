class Employee
  attr_accessor :name, :salary, :manager

  @@all = []

  def initialize (name, salary, manager)
    @name = name
    @salary = salary
    @manager = manager
    @@all << self
  end

  def self.all
    @@all
  end

  def manager_name
    self.manager.name
  end

  def self.paid_over(value)
    @@all.select do |employee|
       employee.salary > value
    end
  end

  def self.raise_wages
    @@all.map do |employee|
      if employee.salary < 100000
        employee.salary = 100000
      end
      employee
    end
  end

  def self.find_by_department (department_name)
    @@all.find do |employee|
      employee.manager.department == department_name
    end
  end


end
