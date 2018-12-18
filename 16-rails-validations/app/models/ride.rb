class Ride < ApplicationRecord
  belongs_to :train
  belongs_to :passenger
  validates :rating, numericality: {only_integer: true}
  validates_inclusion_of :rating, :in => 1..10
end
