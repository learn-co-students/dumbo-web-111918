class CreatePixels < ActiveRecord::Migration[5.2]
  def change
    create_table :pixels do |t|
      t.belongs_to :picture, foreign_key: true
      t.integer :x
      t.integer :y
      t.string :color

      t.timestamps
    end
  end
end
