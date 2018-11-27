class Employee
  attr_accessor :name, :salary, :manager
  @@all = []

  def initialize(name, salary, manager)
    @name = name
    @salary = salary
    @manager = manager
    @@all << self
  end

  def manager_name
    self.manager.name
  end

  def self.all
    @@all
  end

  def self.paid_over(salaryCap)
    self.all.select {|employee| employee.salary > salaryCap}
  end

  def self.find_by_department(department)
    Employee.all.find do |employee|
      employee.manager.department == department
    end
  end

  def tax_bracket
    # We cannot do self.all to get the array of all employees
    mySalary = self.salary
    Employee.all.select do |employee|
      # employee.salary > mySalary - 1000 && employee.salary < mySalary + 1000
      employee.salary.between?(mySalary - 1000, mySalary + 1000)
    end - [self]
  end

end
