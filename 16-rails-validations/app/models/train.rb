class Train < ApplicationRecord
  has_many :rides
  has_many :passengers, through: :rides
  validates :line, uniqueness: true, presence: true
end
