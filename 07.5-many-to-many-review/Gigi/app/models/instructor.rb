class Instructor
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end
  #instance methods
  def pass_student(student_name, test_name)
    self.grade_test(student_name, test_name, 'passed!!!!')
  end

  def fail_student(student_name, test_name)
    self.grade_test(student_name, test_name, 'failed')
  end

  def grade_test(student_name, test_name, new_test_status)
    student_test = self.boating_tests.find do |test|
      full_name = test.student.full_name
      student_name == full_name && test_name == test.name
    end
    student_test.status = new_test_status
  end

  def boating_tests
    BoatingTest.all.select do |test|
      test.instructor == self
    end
  end

  def passed_students_names
    passed_tests = self.boating_tests.select do |bt|
      bt.status == 'passed!!!!'
    end

    passed_tests.collect do |bt|
      bt.student.full_name
    end

  end

  #class methods
  def self.all
    @@all
  end

end
