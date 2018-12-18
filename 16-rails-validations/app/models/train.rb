class Train < ApplicationRecord
  has_many :passengers, dependent: :destroy
end
