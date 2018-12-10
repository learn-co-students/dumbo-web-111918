class PokeBall < ActiveRecord::Base
  belongs_to :trainer
  belongs_to :pokemon
end
