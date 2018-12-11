class CreateSquirrels < ActiveRecord::Migration
  def change
    create_table :squirrels do |t|
      t.string :name
      t.boolean :has_nuts
    end
  end
end
