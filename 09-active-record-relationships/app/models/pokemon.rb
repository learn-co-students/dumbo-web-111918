class Pokemon < ActiveRecord::Base
  has_many :poke_balls
  has_many :trainers, through: :poke_balls

  def fight
    "#{name} attacks with #{attack}!!!!"
  end
end
