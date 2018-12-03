class CreatePokeBalls < ActiveRecord::Migration[5.2]
  def change
    create_table :poke_balls do |t|
      t.integer :trainer_id
      t.integer :pokemon_id
      t.string :nickname
    end
  end
end
