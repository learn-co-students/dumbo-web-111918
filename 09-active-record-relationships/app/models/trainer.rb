class Trainer < ActiveRecord::Base
  #these macros build out the relationships for us
  has_many :poke_balls
  has_many :pokemons, through: :poke_balls


  def battle
    self.pokemons.first.fight
  end
  # def poke_balls
  #   PokeBall.all.select do
  #     |poke_ball| poke_ball.trainer_id == self.id
  #   end
  # end
  #
  # def pokemons
  #   self.poke_balls.map do
  #     |poke_ball| Pokemon.find(poke_ball.pokemon_id)
  #   end
  # end
end
