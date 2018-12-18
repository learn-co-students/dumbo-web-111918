class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.integer :rating
      t.belongs_to :train, foreign_key: true
      t.belongs_to :passenger, foreign_key: true

      t.timestamps
    end
  end
end
