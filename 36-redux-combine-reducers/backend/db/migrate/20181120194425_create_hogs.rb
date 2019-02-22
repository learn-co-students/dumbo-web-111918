class CreateHogs < ActiveRecord::Migration[5.1]
  def change
    create_table :hogs do |t|
      t.string :name
      t.string :specialty
      t.boolean :greased
      t.float :weight_ratio
      t.string :highest_medal_achieved

      t.timestamps
    end
  end
end
