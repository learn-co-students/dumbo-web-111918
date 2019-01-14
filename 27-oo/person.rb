class Person < Mammal

  attr_writer :legal_name, :preferred_name

  def initialize(args = {})
    self.legal_name = args[:legal_name]
    self.preferred_name = args[:preferred_name]
  end

  def introduce
    "Hello, I'm #{ self.preferred_name }"
  end

end

taimur = Person.new({
  legal_name: "Taimur Shah",
  preferred_name: "Taimur"
})


taimur.introduce

