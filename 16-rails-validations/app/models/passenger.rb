class Passenger < ApplicationRecord
  has_many :rides
  has_many :trains, through: :rides
  #The attribute of name must not be nil
  validates :name, presence: true, length: {in: 1..20}
end
