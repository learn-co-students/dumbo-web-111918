class RemoveTrainerIdFromPokemons < ActiveRecord::Migration[5.2]
  def change
    remove_column :pokemons, :trainer_id
  end
end
